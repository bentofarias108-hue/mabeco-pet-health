import { CheckCircle2, Leaf, ShieldCheck, Thermometer } from "lucide-react";
import sectionImage from "@/assets/ready-packages.jpg";

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Sem conservantes, corantes ou ingredientes artificiais.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Total",
    description: "Processos certificados e higiene rigorosa em cada etapa.",
  },
  {
    icon: Thermometer,
    title: "Sempre Fresco",
    description: "Preparado diariamente e entregue com controle de temperatura.",
  },
  {
    icon: CheckCircle2,
    title: "Nutricionalmente Completo",
    description: "Formulado por veterinários especializados em nutrição.",
  },
];

const QualityFeatures = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Como mantemos a qualidade
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compromisso com excelência em cada refeição.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center space-y-4 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center">
                <feature.icon className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 animate-fade-in-up">
          <img 
            src={sectionImage} 
            alt="Embalagens a vácuo MABECO com refeições naturais prontas para entrega"
            className="rounded-2xl shadow-2xl w-full max-w-4xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default QualityFeatures;
