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
// import EducationTime from '../components/EducationTime';
// import { VerticleTimeline } from "../components/VerticleTimeline";
// import Timeline2 from "../components/Timeline2";
import CodingSection from "../components/CodingSection"; //
// import ExperienceSectionjsxjsx from "@/components/ExperienceSection";
import Experience from "@/components/Experience";
import EducationTime from "@/components/EducationTime";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      
      
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <AchievementsSection />
        {/* <Timeline2 /> */}
        <ProjectsSection />
        <CertificationsSection />
        {/* <EducationTime /> */}
        {/* <Achievements /> */}
        {/* <Profiles /> */}
        {/* <CodingSection /> */}
        <EducationTime />
        <EmailSection />
      </div>
      {/* <Footer /> */}
    </main>
  );
}
