// export default function AboutPage() {
//   return (
//     <main>
//       <h1>About</h1>
//       <p>Temporary placeholder page.</p>
//     </main>
//   );
// }


import KineticGrid from "@/components/ui/kinetic-grid";
import AboutSection from "@/components/ui/AboutSection";

export default function AboutPage() {
  return (
    <KineticGrid>
      <AboutSection />
    </KineticGrid>
  );
}