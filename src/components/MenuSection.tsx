import brasileiraImage from "@/assets/menu-brasileira.jpg";
import caipiraImage from "@/assets/menu-caipira.jpg";
import dobradinhaImage from "@/assets/menu-dobradinha.jpg";
import dobradinhaCatImage from "@/assets/menu-dobradinha-cat.jpg";
import galinhadaImage from "@/assets/menu-galinhada.jpg";
import moelaGourmetImage from "@/assets/menu-moela-gourmet.jpg";
import peixeBrocolisImage from "@/assets/menu-peixe-brocolis.jpg";
import quinoaGregaImage from "@/assets/menu-quinoa-grega.jpg";
import risotinhoLinguaImage from "@/assets/menu-risotinho-lingua.jpg";
import lomboLegumesImage from "@/assets/menu-lombo-legumes.jpg";

const menuItems = [
  {
    name: "Brasileira",
    image: brasileiraImage,
    description: "Carne suína, arroz integral, feijão carioca, cenoura e couve"
  },
  {
    name: "Caipira",
    image: caipiraImage,
    description: "Frango desfiado, grão de bico, chuchu, fígado bovino e espinafre"
  },
  {
    name: "Dobradinha",
    image: dobradinhaImage,
    description: "Dobradinha bovina, arroz integral, feijão branco, batata doce e cenoura"
  },
  {
    name: "Dobradinha Cat",
    image: dobradinhaCatImage,
    description: "Dobradinha, quinoa, lentilha, abóbora, ovo e vagem"
  },
  {
    name: "Galinhada",
    image: galinhadaImage,
    description: "Frango desfiado, fígado bovino, arroz integral, cenoura e pimentão"
  },
  {
    name: "Moela Gourmet",
    image: moelaGourmetImage,
    description: "Moela de frango, fígado bovino, lentilha, batata doce e cenoura"
  },
  {
    name: "Peixe com Brócolis",
    image: peixeBrocolisImage,
    description: "Peixe branco, fígado bovino, arroz integral, brócolis e cenoura"
  },
  {
    name: "Quinoa à Grega",
    image: quinoaGregaImage,
    description: "Fígado bovino, quinoa tricolor, feijão, abobrinha, cenoura e batata"
  },
  {
    name: "Risotinho de Língua",
    image: risotinhoLinguaImage,
    description: "Língua bovina, fígado, arroz integral, cenoura e acelga"
  },
  {
    name: "Lombo com Legumes",
    image: lomboLegumesImage,
    description: "Lombo suíno, chuchu, coco, batata inglesa e cenoura"
  }
];

const MenuSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Nosso Cardápio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Receitas desenvolvidas pela Dra. Daniela Maximo, combinando sabor, nutrição e variedade para o seu pet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={`Receita ${item.name} - Comida natural para pets MABECO`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                  <p className="text-sm text-white/90">{item.description}</p>
                </div>
              </div>
              <div className="p-6 bg-card">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Todas as receitas são balanceadas nutricionalmente e aprovadas por médica veterinária
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
