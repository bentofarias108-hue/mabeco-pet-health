import { Heart, Activity, Scale, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Heart,
    title: "Saúde Completa",
    description: "Fortalece o sistema imunológico e melhora a qualidade de vida do seu pet.",
  },
  {
    icon: Activity,
    title: "Digestão Facilitada",
    description: "Ingredientes naturais promovem absorção ideal de nutrientes essenciais.",
  },
  {
    icon: Scale,
    title: "Peso Equilibrado",
    description: "Porções balanceadas garantem o peso ideal e mais disposição.",
  },
  {
    icon: Sparkles,
    title: "Higiene Natural",
    description: "Melhora a saúde bucal e reduz odores desagradáveis naturalmente.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por que escolher MABECO?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforme a vida do seu pet com alimentação natural de verdade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="card-elevated hover:scale-105 transition-transform duration-300 animate-scale-in border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
