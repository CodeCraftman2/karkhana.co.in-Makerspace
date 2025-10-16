import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DiscoverLabs from "@/components/DiscoverLabs";
import ProcessSteps from "@/components/ProcessSteps";
import EquipmentSection from "@/components/EquipmentSection";
import TypesOfLabs from "@/components/TypesOfLabs";
import ContactForm from "@/components/ContactForm";
import MakersSection from "@/components/MakersSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <DiscoverLabs />
      <ProcessSteps />
      <EquipmentSection />
      <TypesOfLabs />
      <ContactForm />
      <MakersSection />
      <Footer />
    </div>
  );
}
