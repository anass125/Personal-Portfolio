// // export default function WorksPage() {
// //   return (
// //     <main>
// //       <h1>Works</h1>
// //       <p>Temporary placeholder page.</p>
// //     </main>
// //   );
// // }

// import WorksSection from "@/components/ui/WorksSection";

// export default function WorksPage() {
//   return <WorksSection />;
// }



// import KineticGrid from "@/components/ui/kinetic-grid";
// import WorksSection from "@/components/ui/SkillsSection.jsx";

// export default function WorksPage() {
//   return (
//     <KineticGrid className="min-h-screen">
//       <div className="relative min-h-screen bg-transparent text-[#F1EEE9]">
//         <WorksSection />
//       </div>
//     </KineticGrid>
//   );
// }


import KineticGrid from "@/components/ui/kinetic-grid";
import WorksSection from "@/components/ui/WorksSection";

export default function WorksPage() {
  return (
    <KineticGrid>
      <WorksSection />
    </KineticGrid>
  );
}