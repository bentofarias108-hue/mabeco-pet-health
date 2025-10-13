import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/mabeco-store.jpg";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send?phone=5514997415100&text=Olá! Gostaria de saber mais sobre a alimentação natural MABECO.", "_blank");
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg">
            MABECO — Alimentação Natural
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-md">
            Refeições balanceadas, frescas e feitas por quem entende de nutrição animal. Resultados visíveis em bem-estar e energia.
          </p>
          <div className="pt-4">
            <Button 
              variant="hero" 
              size="lg"
              onClick={handleWhatsAppClick}
              className="animate-scale-in"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Quero conversar no WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
