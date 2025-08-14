import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import CertificationsSection from "../components/CertificationsSection";
import EmailSection from "../components/EmailSection";
import Footer from "../components/Footer";
import AchievementsSection from "../components/AchievementsSection";
import Achievements from "@/components/Achievement";
import Profiles from '../components/Profiles';
import CodingSection from "../components/CodingSection";
import Experience from "@/components/Experience";
import EducationTime from "@/components/EducationTime";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        
        <div className="premium-container">
          <AboutSection />
          <ServicesSection />
          <SkillsSection />
          <AchievementsSection />
          <ProjectsSection />
          <CertificationsSection />
          <EducationTime />
          <EmailSection />
        </div>
      </div>
    </main>
  );
}
