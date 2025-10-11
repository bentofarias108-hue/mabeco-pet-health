import { CheckCircle2 } from "lucide-react";
import section2Image from "@/assets/sealing-package.jpg";

const benefits = [
  "Reduz significativamente visitas ao veterinário",
  "Aumenta a expectativa de vida do seu pet",
  "Melhora a aparência da pelagem e pele",
  "Aumenta energia e disposição para brincar",
  "Fortalece ossos, dentes e articulações",
  "Melhora o hálito e saúde bucal",
  "Reduz problemas digestivos e alergias",
  "Promove fezes menores e menos odor",
];

const BenefitsList = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Benefícios Comprovados
              </h2>
              <p className="text-xl text-muted-foreground">
                Resultados que você vai notar em poucas semanas.
              </p>
            </div>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3 animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-lg text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-scale-in">
            <img 
              src={section2Image} 
              alt="Processo de selagem a vácuo das refeições naturais MABECO garantindo frescor"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsList;
