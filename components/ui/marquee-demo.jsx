

// import { Marquee } from "@/components/ui/marquee";

// const items = ["React", "Next.js", "Tailwind", "JavaScript", "Node.js", "MongoDB", "Redis"];

// export default function MarqueeDemo() {
//   return (
//     <div className="min-h-[0vh] ">
//       <div className="sticky top-0">
//         <Marquee pauseOnHover>
//           {items.map((item) => (
//             <span key={item} className="text-2xl font-medium leading-none">
//               {item}
//             </span>
//           ))}
//         </Marquee>
//       </div>
//     </div>
//   );
// }






import { Marquee } from "@/components/ui/marquee";

const items = [
  "Node.js",
  "Express.js",
  "MongoDB",
  "Redis",
  "BullMQ",
  "Razorpay",
  "React.js",
  "Next.js",
  "JavaScript",
  "Java",
  "Tailwind CSS",
  "Redux",
  "JWT",
  "Docker",
];

export default function MarqueeDemo() {
  return (
    <Marquee pauseOnHover>
      {items.map((item) => (
        <span
          key={item}
          className="font-mono text-lg uppercase leading-none tracking-[0.14em] sm:text-xl"
        >
          {item}
        </span>
      ))}
    </Marquee>
  );
}