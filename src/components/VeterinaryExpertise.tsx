import veterinaryImage from "@/assets/veterinary-expertise.jpg";
import { Award, Heart } from "lucide-react";

const VeterinaryExpertise = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="h-8 w-8 text-primary" />
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Feitas com carinho e ciência
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cada receita MABECO é desenvolvida e preparada pela médica veterinária 
              <strong className="text-foreground"> Dra. Daniela Maximo</strong>, especialista 
              em nutrição animal com anos de experiência em saúde pet.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa comida não é genérica. Cada ingrediente é escolhido pensando na saúde 
              específica do seu animal, combinando conhecimento científico veterinário com 
              o cuidado de quem realmente ama pets.
            </p>
            <div className="bg-secondary/30 rounded-xl p-6 border-l-4 border-primary">
              <div className="flex items-start gap-3">
                <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-lg mb-2">
                    Sua confiança garantida
                  </p>
                  <p className="text-muted-foreground">
                    Nutricionista responsável: <span className="text-foreground font-medium">Dra. Daniela Maximo - CRMV-SP</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-fade-in-up lg:order-first">
            <img 
              src={veterinaryImage} 
              alt="Refeição natural MABECO preparada com ingredientes frescos selecionados pela nutricionista veterinária"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VeterinaryExpertise;
