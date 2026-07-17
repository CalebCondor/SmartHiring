import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";

const AboutSection = dynamic(() =>
  import("@/components/AboutSection").then((m) => ({
    default: m.AboutSection,
  })),
);
const ServicesSection = dynamic(() =>
  import("@/components/ServicesSection").then((m) => ({
    default: m.ServicesSection,
  })),
);
const ProjectsSection = dynamic(() =>
  import("@/components/ProjectsSection").then((m) => ({
    default: m.ProjectsSection,
  })),
);
const BlogSection = dynamic(() =>
  import("@/components/BlogSection").then((m) => ({ default: m.BlogSection })),
);
const ContactSection = dynamic(() =>
  import("@/components/ContactSection").then((m) => ({
    default: m.ContactSection,
  })),
);
const SmartHiringSection = dynamic(() =>
  import("@/components/SmartHiringSection").then((m) => ({
    default: m.SmartHiringSection,
  })),
);
const Footer = dynamic(() =>
  import("@/components/Footer").then((m) => ({ default: m.Footer })),
);

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
       
        <ContactSection />
      </main>
      ¡{" "}
    </>
  );
}
