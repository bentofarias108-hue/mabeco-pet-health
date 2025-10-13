import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const CTASection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/message/2CLLVIOFUVFKM1", "_blank");
  };

  const handlePhoneClick = () => {
    window.open("tel:+5514997675100", "_blank");
  };

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Dê mais saúde ao seu pet hoje
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Agende uma avaliação gratuita e descubra o plano alimentar ideal para seu melhor amigo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              variant="cta" 
              size="lg"
              onClick={handleWhatsAppClick}
              className="text-lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar no WhatsApp
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={handlePhoneClick}
              className="text-lg border-2 border-white bg-foreground text-white hover:bg-white hover:text-foreground"
            >
              <Phone className="mr-2 h-5 w-5" />
              Ligar Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
