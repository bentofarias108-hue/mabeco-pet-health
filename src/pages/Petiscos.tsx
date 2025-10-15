import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Petiscos = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 mt-4">
          <Button variant="outline" asChild>
            <Link to="/">Voltar ao Início</Link>
          </Button>
        </div>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Petiscos
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Em breve, nossos petiscos naturais e saudáveis para seu pet.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Petiscos;
