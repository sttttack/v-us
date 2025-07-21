import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { ContactSection } from "@/components/ContactSection";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <ContactSection />
    </div>
  );
};

export default Index;
