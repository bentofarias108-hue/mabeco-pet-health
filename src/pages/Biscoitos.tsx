import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import biscoito1 from "@/assets/biscoito-1.jpg";
import biscoito2 from "@/assets/biscoito-2.jpg";
import biscoito3 from "@/assets/biscoito-3.jpg";
import biscoito4 from "@/assets/biscoito-4.jpg";
import biscoito5 from "@/assets/biscoito-5.jpg";
import biscoito6 from "@/assets/biscoito-6.jpg";
import biscoito7 from "@/assets/biscoito-7.jpg";
import biscoito8 from "@/assets/biscoito-8.jpg";

const biscoitos = [
  { name: "Biscoito Natural 1", image: biscoito1 },
  { name: "Biscoito Natural 2", image: biscoito2 },
  { name: "Biscoito Natural 3", image: biscoito3 },
  { name: "Biscoito Natural 4", image: biscoito4 },
  { name: "Biscoito Natural 5", image: biscoito5 },
  { name: "Biscoito Natural 6", image: biscoito6 },
  { name: "Biscoito Natural 7", image: biscoito7 },
  { name: "Biscoito Natural 8", image: biscoito8 },
];

const Biscoitos = () => {
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
                Biscoitos
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Nossos deliciosos biscoitos naturais para seu pet.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
              {biscoitos.map((biscoito, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={biscoito.image}
                    alt={biscoito.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <h3 className="text-white text-xl font-bold p-4 w-full">
                      {biscoito.name}
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

export default Biscoitos;
