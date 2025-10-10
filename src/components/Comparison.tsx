import { Check, X } from "lucide-react";
import comparisonImage from "@/assets/pet-bowl.jpg";

const mabecoFeatures = [
  "Ingredientes frescos e naturais",
  "Formulação personalizada",
  "Sem conservantes artificiais",
  "Preparado diariamente",
  "Acompanhamento nutricional",
];

const kibbleFeatures = [
  "Ingredientes processados",
  "Fórmula genérica",
  "Conservantes químicos",
  "Longa validade",
  "Sem acompanhamento",
];

const Comparison = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            MABECO vs. Ração Comum
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja a diferença que faz escolher alimentação natural.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {/* MABECO Column */}
          <div className="space-y-4 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center lg:text-right">
              MABECO
            </h3>
            {mabecoFeatures.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 justify-end"
              >
                <span className="text-foreground text-right">{feature}</span>
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-accent" />
                </div>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="animate-scale-in">
            <img 
              src={comparisonImage} 
              alt="Tigela com alimentação natural MABECO preparada com ingredientes frescos"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>

          {/* Kibble Column */}
          <div className="space-y-4 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-muted-foreground mb-6 text-center lg:text-left">
              Ração Comum
            </h3>
            {kibbleFeatures.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                  <X className="w-5 h-5 text-destructive" />
                </div>
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
