import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CompanyInfo from "@/components/CompanyInfo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Nutrovitta = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 mt-4">
          <Button variant="outline" asChild>
            <Link to="/">Voltar ao Início</Link>
          </Button>
        </div>
        <CompanyInfo />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Nutrovitta;
