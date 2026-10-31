"use client";
import Hero from "@/components/ui/animated-shader-hero";

// Demo Component showing how to use the Hero
const HeroDemo = () => {
  const handlePrimaryClick = () => {
    window.location.href = '/works';
    // Add your logic here
  };

  const handleSecondaryClick = () => {
    window.location.href = '/contact';
    // Add your logic here
  };

  return (
    <div className="w-full">
      <Hero
        trustBadge={{
          text: "Available for Full-Stack Developer Opportunities.",
          icons: ["✨"]
        }}
        headline={{
          line1: "Anas Shaikh",
          line2: "MERN Stack Developer"
        }}
        subtitle="I build modern, responsive web applications with React and Next.js — creating reusable components, intuitive user experiences, and secure backend APIs."
        buttons={{
          primary: {
            text: "View My Work",
            onClick: handlePrimaryClick
          },
          secondary: {
            text: "Contact Me",
            onClick: handleSecondaryClick
          }
        }}
      />

    </div>
  );
};

export default HeroDemo;