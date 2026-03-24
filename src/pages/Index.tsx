import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <footer className="border-t border-border py-8">
        <div className="container px-6 text-center">
          <p className="font-mono text-xs text-muted-foreground">
            © 2025 Dinusha Sewwandi. Built with passion for cybersecurity.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
