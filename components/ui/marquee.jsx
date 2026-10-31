

// "use client";

// import React, { useEffect, useRef } from "react";
// import { cn } from "@/lib/utils";

// export function Marquee({
//   children,
//   className,
//   speed = 60, // pixels per second
//   pauseOnHover = false,
//   defaultDirection = "left",
//   fade = true,
//   fadeAmount = 10,
//   repeat = 6, // how many times the items are repeated
//   ...props
// }) {
//   const scrollerRef = useRef(null);
//   const offset = useRef(0);
//   const direction = useRef(defaultDirection === "left" ? -1 : 1);
//   const paused = useRef(false);

//   const items = React.Children.toArray(children);

//   useEffect(() => {
//     let frameId;
//     let lastTime = performance.now();
//     let lastY = window.scrollY;

//     const onScroll = () => {
//       const y = window.scrollY;
//       if (y > lastY) direction.current = 1; // scroll down -> left to right
//       else if (y < lastY) direction.current = -1; // scroll up -> right to left
//       lastY = y;
//     };

//     const tick = (now) => {
//       const dt = (now - lastTime) / 1000;
//       lastTime = now;

//       const el = scrollerRef.current;
//       if (el && !paused.current) {
//         const setWidth = el.scrollWidth / repeat; // width of one set
//         if (setWidth > 0) {
//           offset.current += direction.current * speed * dt;
//           offset.current = ((offset.current % setWidth) + setWidth) % setWidth;
//           el.style.transform = `translateX(${offset.current - setWidth}px)`;
//         }
//       }
//       frameId = requestAnimationFrame(tick);
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     frameId = requestAnimationFrame(tick);

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       cancelAnimationFrame(frameId);
//     };
//   }, [speed, repeat]);

//   const mask = `linear-gradient(to right, transparent 0%, black ${fadeAmount}%, black ${
//     100 - fadeAmount
//   }%, transparent 100%)`;

//   return (
//     <div
//       className={cn(
//         "flex h-[1.7cm] w-full border-y border-5 border-black  items-center overflow-hidden bg-background",
//         className
//       )}
//       style={fade ? { maskImage: mask, WebkitMaskImage: mask } : undefined}
//       onMouseEnter={() => pauseOnHover && (paused.current = true)}
//       onMouseLeave={() => pauseOnHover && (paused.current = false)}
//       {...props}
//     >
//       <div
//         ref={scrollerRef}
//         className="flex h-full shrink-0 items-center will-change-transform"
//       >
//         {Array.from({ length: repeat }).flatMap((_, set) =>
//           items.map((item, index) => (
//             <div
//               key={`${set}-${index}`}
//               className="flex shrink-0 items-center"
//             >
//               {item}
//               {/* dot after every word, equal space on both sides */}
//               <span
//                 aria-hidden="true"
//                 className="mx-8 size-2 shrink-0 rounded-full bg-current"
//               />
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }























"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function Marquee({
  children,
  className,
  speed = 60, // pixels per second
  pauseOnHover = false,
  defaultDirection = "left",
  fade = false,
  fadeAmount = 10,
  repeat = 6, // how many times the items are repeated
  ...props
}) {
  const scrollerRef = useRef(null);
  const offset = useRef(0);
  const direction = useRef(defaultDirection === "left" ? -1 : 1);
  const paused = useRef(false);

  const items = React.Children.toArray(children);

  useEffect(() => {
    let frameId;
    let lastTime = performance.now();
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY) direction.current = 1; // scroll down -> left to right
      else if (y < lastY) direction.current = -1; // scroll up -> right to left
      lastY = y;
    };

    const tick = (now) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      const el = scrollerRef.current;
      if (el && !paused.current) {
        const setWidth = el.scrollWidth / repeat; // width of one set
        if (setWidth > 0) {
          offset.current += direction.current * speed * dt;
          offset.current = ((offset.current % setWidth) + setWidth) % setWidth;
          el.style.transform = `translateX(${offset.current - setWidth}px)`;
        }
      }
      frameId = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    frameId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frameId);
    };
  }, [speed, repeat]);

  const mask = `linear-gradient(to right, transparent 0%, black ${fadeAmount}%, black ${
    100 - fadeAmount
  }%, transparent 100%)`;

  return (
    <div
      className={cn(
        "flex h-15 w-full items-center overflow-hidden border-y border-white/10 bg-[#0B0B0B] text-[#A8A39B]",
        className
      )}
      style={fade ? { maskImage: mask, WebkitMaskImage: mask } : undefined}
      onMouseEnter={() => pauseOnHover && (paused.current = true)}
      onMouseLeave={() => pauseOnHover && (paused.current = false)}
      {...props}
    >
      <div
        ref={scrollerRef}
        className="flex h-full shrink-0 items-center will-change-transform"
      >
        {Array.from({ length: repeat }).flatMap((_, set) =>
          items.map((item, index) => (
            <div
              key={`${set}-${index}`}
              className="flex shrink-0 items-center"
            >
              {item}
              {/* small dot after every word, equal space on both sides */}
              <span
                aria-hidden="true"
                className="mx-7 size-1 shrink-0 rounded-full bg-current"
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}