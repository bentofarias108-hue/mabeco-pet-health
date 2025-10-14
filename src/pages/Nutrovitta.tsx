import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CompanyInfo from "@/components/CompanyInfo";

const Nutrovitta = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <CompanyInfo />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Nutrovitta;
