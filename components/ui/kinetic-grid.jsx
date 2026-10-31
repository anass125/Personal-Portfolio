// 






"use client";

import { useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const CELL_SIZE = 55;
const INFLUENCE_RADIUS = 260;
const MAX_WARP = 24;
const DOT_SPACING = 28;
const LERP_SPEED = 0.08;

// Subtle, warm-neutral grid lines at rest.
const LINE_BASE = {
  r: 255,
  g: 226,
  b: 202,
  a: 0.065,
};

const NODE_BASE_RADIUS = 1.2;
const NODE_ACTIVE_RADIUS = 2.6;

function lerpN(a, b, t) {
  return a + (b - a) * t;
}

function lerpColor(base, active, t) {
  const r = Math.round(lerpN(base.r, active.r, t));
  const g = Math.round(lerpN(base.g, active.g, t));
  const b = Math.round(lerpN(base.b, active.b, t));
  const a = lerpN(base.a, active.a, t);

  return `rgba(${r},${g},${b},${a.toFixed(3)})`;
}

export default function KineticGrid({
  children,
  className,
  globalColor = "default",
}) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const targetMouseRef = useRef({ x: -9999, y: -9999 });
  const ripplesRef = useRef([]);
  const rafRef = useRef(0);
  const sizeRef = useRef({ w: 0, h: 0 });

  const getWarpedPoint = useCallback(
    (gx, gy, col, row, mouse, ripples, cols, rows) => {
      const edgeMargin = 1.5;

      const colPin = Math.min(
        col / edgeMargin,
        (cols - 1 - col) / edgeMargin,
        1
      );

      const rowPin = Math.min(
        row / edgeMargin,
        (rows - 1 - row) / edgeMargin,
        1
      );

      const pinFactor = colPin * colPin * rowPin * rowPin;

      const dx = gx - mouse.x;
      const dy = gy - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const proximity =
        Math.max(0, 1 - dist / INFLUENCE_RADIUS) * pinFactor;

      let rx = 0;
      let ry = 0;

      for (const ripple of ripples) {
        const rdx = gx - ripple.x;
        const rdy = gy - ripple.y;
        const rdist = Math.sqrt(rdx * rdx + rdy * rdy);

        const waveWidth = 55;
        const diff = rdist - ripple.radius;

        if (Math.abs(diff) < waveWidth) {
          const strength =
            (1 - Math.abs(diff) / waveWidth) *
            ripple.opacity *
            18 *
            pinFactor;

          const angle = Math.atan2(rdy, rdx);
          const sign = diff < 0 ? -1 : 1;

          rx += Math.cos(angle) * strength * sign * -1;
          ry += Math.sin(angle) * strength * sign * -1;
        }
      }

      if (
        dist < INFLUENCE_RADIUS &&
        dist > 0 &&
        pinFactor > 0
      ) {
        const t = dist / INFLUENCE_RADIUS;

        const eased =
          t < 0.01
            ? 0
            : (1 - t) *
              (1 - t) *
              Math.min(1, dist / 60);

        const warpAmt = eased * MAX_WARP * pinFactor;
        const angle = Math.atan2(dy, dx);

        return {
          pt: {
            x: gx - Math.cos(angle) * warpAmt + rx,
            y: gy - Math.sin(angle) * warpAmt + ry,
          },
          proximity,
        };
      }

      return {
        pt: {
          x: gx + rx,
          y: gy + ry,
        },
        proximity,
      };
    },
    []
  );

  const draw = useCallback(
    (now) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const { w: W, h: H } = sizeRef.current;
      const mouse = mouseRef.current;
      const ripples = ripplesRef.current;

      // Warm colors inspired by the animated shader hero.
      // Keep all resting elements subtle so content remains primary.
      const themes = {
        default: {
          bg: "#080706",

          lineActive: {
            r: 255,
            g: 157,
            b: 62,
            a: 0.42,
          },

          nodeActive: {
            r: 255,
            g: 190,
            b: 91,
            a: 0.95,
          },

          glow: "255,153,51",
          ripple: "255,177,75",
        },

        monochrome: {
          bg: "#080808",

          lineActive: {
            r: 255,
            g: 255,
            b: 255,
            a: 0.38,
          },

          nodeActive: {
            r: 255,
            g: 255,
            b: 255,
            a: 0.9,
          },

          glow: "255,255,255",
          ripple: "255,255,255",
        },
      };

      const theme =
        themes[globalColor] ?? themes.default;

      ctx.clearRect(0, 0, W, H);

      // Background
      ctx.fillStyle = theme.bg;
      ctx.fillRect(0, 0, W, H);

      // Very subtle background dots
      ctx.fillStyle = "rgba(255,226,202,0.035)";

      for (
        let x = DOT_SPACING / 2;
        x < W;
        x += DOT_SPACING
      ) {
        for (
          let y = DOT_SPACING / 2;
          y < H;
          y += DOT_SPACING
        ) {
          ctx.beginPath();
          ctx.arc(x, y, 0.65, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Update click ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const ripple = ripples[i];
        const age = (now - ripple.born) / 1000;

        ripple.radius = Math.max(0, age * 400);
        ripple.opacity = Math.max(0, 1 - age * 1.2);

        if (ripple.opacity <= 0) {
          ripples.splice(i, 1);
        }
      }

      // Grid dimensions
      const cols =
        Math.max(2, Math.ceil(W / CELL_SIZE)) + 1;

      const rows =
        Math.max(2, Math.ceil(H / CELL_SIZE)) + 1;

      const cellW = W / (cols - 1);
      const cellH = H / (rows - 1);

      const pts = [];
      const prox = [];

      // Build the warped grid
      for (let row = 0; row < rows; row++) {
        pts[row] = [];
        prox[row] = [];

        for (let col = 0; col < cols; col++) {
          const { pt, proximity } = getWarpedPoint(
            col * cellW,
            row * cellH,
            col,
            row,
            mouse,
            ripples,
            cols,
            rows
          );

          pts[row][col] = pt;
          prox[row][col] = proximity;
        }
      }

      // Draw grid segments
      const drawSeg = (p1, p2, pr1, pr2) => {
        const avg = (pr1 + pr2) / 2;
        const t = avg * avg * (3 - 2 * avg);

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);

        ctx.strokeStyle = lerpColor(
          LINE_BASE,
          theme.lineActive,
          t
        );

        ctx.lineWidth = lerpN(0.65, 1.15, t);
        ctx.stroke();
      };

      ctx.lineCap = "round";

      // Horizontal lines
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols - 1; col++) {
          drawSeg(
            pts[row][col],
            pts[row][col + 1],
            prox[row][col],
            prox[row][col + 1]
          );
        }
      }

      // Vertical lines
      for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows - 1; row++) {
          drawSeg(
            pts[row][col],
            pts[row + 1][col],
            prox[row][col],
            prox[row + 1][col]
          );
        }
      }

      // Intersection nodes
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const p = pts[row][col];
          const pr = prox[row][col];
          const t = pr * pr * (3 - 2 * pr);

          const r = lerpN(
            NODE_BASE_RADIUS,
            NODE_ACTIVE_RADIUS,
            t
          );

          // Restrained glow around the pointer
          if (t > 0.3) {
            const glowR =
              r + lerpN(0, 5, (t - 0.3) / 0.7);

            const grd = ctx.createRadialGradient(
              p.x,
              p.y,
              r * 0.5,
              p.x,
              p.y,
              glowR
            );

            grd.addColorStop(
              0,
              `rgba(${theme.glow},${(t * 0.22).toFixed(3)})`
            );

            grd.addColorStop(
              1,
              `rgba(${theme.glow},0)`
            );

            ctx.beginPath();
            ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
            ctx.fillStyle = grd;
            ctx.fill();
          }

          // Grid node
          ctx.beginPath();
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2);

          ctx.fillStyle = lerpColor(
            {
              r: 255,
              g: 226,
              b: 202,
              a: 0.16,
            },
            theme.nodeActive,
            t
          );

          ctx.fill();
        }
      }

      // Click ripple rings
      for (const ripple of ripples) {
        ctx.beginPath();

        ctx.arc(
          ripple.x,
          ripple.y,
          Math.max(0, ripple.radius),
          0,
          Math.PI * 2
        );

        ctx.strokeStyle =
          `rgba(${theme.ripple},${(
            ripple.opacity * 0.2
          ).toFixed(3)})`;

        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
    },
    [getWarpedPoint, globalColor]
  );

  const animate = useCallback(
    (now) => {
      const mouse = mouseRef.current;
      const target = targetMouseRef.current;

      mouse.x = lerpN(mouse.x, target.x, LERP_SPEED);
      mouse.y = lerpN(mouse.y, target.y, LERP_SPEED);

      draw(now);

      rafRef.current = requestAnimationFrame(animate);
    },
    [draw]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const setSize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      canvas.width = w;
      canvas.height = h;

      sizeRef.current = { w, h };
    };

    setSize();

    const onMouseMove = (e) => {
      targetMouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    const onClick = (e) => {
      ripplesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        opacity: 1,
        born: performance.now(),
      });
    };

    window.addEventListener("resize", setSize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("click", onClick);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", setSize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("click", onClick);

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [animate]);

  return (
    <div
      className={cn(
        "relative min-h-screen w-full overflow-hidden",
        globalColor === "monochrome"
          ? "bg-[#080808]"
          : "bg-[#080706]",
        className
      )}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 z-0 h-full w-full pointer-events-none"
      />

      <div className="relative z-10 min-h-screen w-full">
        {children}
      </div>
    </div>
  );
}
