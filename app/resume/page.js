// export default function ResumePage() {
//   return (
//     <main>
//       <h1>Resume</h1>
//       <p>Temporary placeholder page.</p>
//     </main>
//   );
// }


import KineticGrid from "@/components/ui/kinetic-grid";
import ResumeSection from "@/components/ui/ResumeSection";

export default function ResumePage() {
  return (
    <KineticGrid>
      <ResumeSection />
    </KineticGrid>
  );
}