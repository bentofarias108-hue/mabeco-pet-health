import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import petisco1 from "@/assets/petisco-1.jpg";
import petisco2 from "@/assets/petisco-2.jpg";
import buchinho from "@/assets/buchinho.jpg";
import gelinho from "@/assets/gelinho.jpg";

const petiscos = [
  { name: "Petisco Natural 1", image: petisco1 },
  { name: "Petisco Natural 2", image: petisco2 },
  { name: "Buchinho", image: buchinho },
  { name: "Gelinho", image: gelinho },
];

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
            <div className="text-center space-y-6 animate-fade-in-up mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Petiscos
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Nossos petiscos naturais e saudáveis para seu pet.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
              {petiscos.map((petisco, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={petisco.image}
                    alt={petisco.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <h3 className="text-white text-xl font-bold p-4 w-full">
                      {petisco.name}
                    </h3>
                  </div>
                </div>
              ))}
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
