// import HeroDemo from "@/components/ui/animated-shader-hero-demo";
// import MarqueeDemo from "@/components/ui/marquee-demo";
// import PortfolioOverview from "@/components/ui/PortfolioOverview";
// export default function Home() { return <> <HeroDemo /> <PortfolioOverview /> <MarqueeDemo /> </> ; }




// // After you copy components/ui/kinetic-grid.jsx from your original project,
// // replace this placeholder with:
// // import Component from "@/components/ui/kinetic-grid";
// // export default function Page() { return <Component />; };

// // import KineticGrid from "@/components/ui/kinetic-grid";

// // export default function Home() { return <KineticGrid/> }



import KineticGrid from "@/components/ui/kinetic-grid";
import PortfolioOverview from "@/components/ui/PortfolioOverview";
import MarqueeDemo from "@/components/ui/marquee-demo";
import HeroDemo from "@/components/ui/animated-shader-hero-demo";
import HorizonHero from "@/components/ui/horizon-hero-section";

export default function HomePage() {
    return (
        <>
         <HorizonHero />
        <KineticGrid>
            {/* <HeroDemo /> */}
            <MarqueeDemo />
            <PortfolioOverview />
            <MarqueeDemo />
        </KineticGrid>
        </>
    );
}