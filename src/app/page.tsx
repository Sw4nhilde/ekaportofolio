import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/hero/HeroSection';
import TelemetryProjects from '@/components/projects/TelemetryProjects';
import ExperienceSection from '@/components/experience/ExperienceSection';
import ToolsSection from '@/components/tools/ToolsSection';
import CertificationsSection from '@/components/certifications/CertificationsSection';
import PitRadio from '@/components/pitradio/PitRadio';
import StartingLightsProgress from '@/components/telemetry/StartingLightsProgress';

const Divider = () => (
  <div className="w-full flex items-center justify-center py-2 bg-[#030914]">
    <div className="w-[90%] max-w-6xl h-px bg-gradient-to-r from-transparent via-[#f2e529]/40 to-transparent" />
  </div>
);

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#030914] text-[#f0f0f0]">
      {/* 5-Light Starting Gantry Scroll Progress */}
      <StartingLightsProgress />

      <Navbar />

      <HeroSection />
      <Divider />

      <TelemetryProjects />
      <Divider />

      <ExperienceSection />
      <Divider />

      <ToolsSection />
      <Divider />

      <CertificationsSection />
      <Divider />

      <PitRadio />
      <Divider />

      <Footer />
    </main>
  );
}
