import packagingImage from "@/assets/vacuum-packages.jpg";
import { ShieldCheck, Snowflake, Package } from "lucide-react";

const PackagingSection = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Segurança e frescor garantidos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Práticas, seguras e sempre fresquinhas para o seu pet
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <img 
              src={packagingImage} 
              alt="Embalagens a vácuo MABECO garantindo frescor e segurança alimentar"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
          
          <div className="space-y-8 animate-fade-in-up">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Package className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Embaladas a vácuo
                </h3>
                <p className="text-muted-foreground">
                  Tecnologia de selagem a vácuo que preserva todos os nutrientes e 
                  sabores naturais, garantindo máxima qualidade em cada porção.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Snowflake className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Fácil armazenamento
                </h3>
                <p className="text-muted-foreground">
                  Nossas embalagens cabem perfeitamente no seu freezer e são práticas 
                  para descongelar. Organize facilmente as refeições da semana do seu pet.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Máxima higiene e segurança
                </h3>
                <p className="text-muted-foreground">
                  Preparadas em ambiente controlado seguindo rigorosos padrões sanitários. 
                  Cada embalagem mantém a integridade alimentar do preparo à tigela.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagingSection;
