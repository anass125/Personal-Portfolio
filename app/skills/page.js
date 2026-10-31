
// import SkillsSection from "@/components/ui/SkillsSection";

// export default function SkillsPage() {
//   return (
//     <div className="relative min-h-screen bg-[#0B0B0B] text-[#F1EEE9]">
//       <SkillsSection />
//     </div>
//   );
// }




import KineticGrid from "@/components/ui/kinetic-grid";
import SkillsSection from "@/components/ui/SkillsSection.jsx";

export default function SkillsPage() {
  return (
    <KineticGrid className="min-h-screen">
      <div className="relative min-h-screen bg-transparent text-[#F1EEE9]">
        <SkillsSection />
      </div>
    </KineticGrid>
  );
}
