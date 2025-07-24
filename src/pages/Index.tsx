import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { ContactSection } from "@/components/ContactSection";
import { Header } from "@/components/Header";
import { ScrollUpButton } from "@/components/ScrollUpButton";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <ContactSection />
      <ScrollUpButton />
      <Footer />
    </div>
  );
};

export default Index;
