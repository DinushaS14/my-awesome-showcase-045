import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <footer className="border-t border-border py-8">
        <div className="container px-6 text-center">
          <p className="font-mono text-xs text-muted-foreground">
            © 2026 Dinusha Sewwandi. Built with passion for cybersecurity.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
