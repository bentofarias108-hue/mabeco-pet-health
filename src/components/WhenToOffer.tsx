import whenOfferBg from "@/assets/fresh-vegetables.jpg";

const scenarios = [
  {
    title: "Filhotes em Crescimento",
    description: "Nutrição adequada para desenvolvimento saudável",
  },
  {
    title: "Pets com Alergias",
    description: "Ingredientes controlados e rastreáveis",
  },
  {
    title: "Controle de Peso",
    description: "Porções balanceadas para manter o peso ideal",
  },
  {
    title: "Recuperação Pós-Cirúrgica",
    description: "Nutrição otimizada para acelerar a recuperação",
  },
];

const WhenToOffer = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${whenOfferBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Quando oferecer alimentação natural?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            MABECO é ideal para diversos momentos da vida do seu pet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {scenarios.map((scenario, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 card-elevated border border-white/20 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                {scenario.title}
              </h3>
              <p className="text-white/80 text-lg">
                {scenario.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhenToOffer;
