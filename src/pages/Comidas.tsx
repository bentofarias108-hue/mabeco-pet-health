import Header from "@/components/Header";
import MenuSection from "@/components/MenuSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Comidas = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <MenuSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Comidas;
