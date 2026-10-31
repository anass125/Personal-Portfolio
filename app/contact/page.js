// export default function ContactPage() {
//   return (
//     <main>
//       <h1>Contact</h1>
//       <p>Temporary placeholder page.</p>
//     </main>
//   );
// }


import KineticGrid from "@/components/ui/kinetic-grid";
import ContactSection from "@/components/ui/ContactSection";

export default function ContactPage() {
  return (
    <KineticGrid>
      <ContactSection />
    </KineticGrid>
  );
}