import videoThumb from "@/assets/video-thumb.jpg";

const VideoSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <img 
              src={videoThumb} 
              alt="Cozinha profissional MABECO preparando alimentação natural para pets"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
          <div className="space-y-6 animate-fade-in-up lg:pl-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Preparado com Amor e Ciência
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa cozinha profissional segue rígidos padrões de segurança alimentar. 
              Cada refeição é preparada com ingredientes frescos, selecionados e 
              balanceados por nutricionistas veterinários.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Combinamos o cuidado artesanal com conhecimento científico para entregar 
              nutrição que seu pet merece.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
