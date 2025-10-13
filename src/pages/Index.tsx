import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import VideoSection from "@/components/VideoSection";
import VeterinaryExpertise from "@/components/VeterinaryExpertise";
import QualityFeatures from "@/components/QualityFeatures";
import Comparison from "@/components/Comparison";
import PackagingSection from "@/components/PackagingSection";
import WhenToOffer from "@/components/WhenToOffer";
import BenefitsList from "@/components/BenefitsList";
import MenuSection from "@/components/MenuSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero />
        <Benefits />
        <VideoSection />
        <MenuSection />
        <VeterinaryExpertise />
        <QualityFeatures />
        <Comparison />
        <PackagingSection />
        <WhenToOffer />
        <BenefitsList />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
