import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const CTASection = () => {
  const handleWhatsAppClick = () => {
    const wppMessageUrl = "https://wa.me/message/2CLLVIOFUVFKM1";
    const fallbackUrl = "https://api.whatsapp.com/send?phone=5514997415100";
    try {
      const win = window.open(wppMessageUrl, "_blank", "noopener,noreferrer");
      if (!win) {
        window.open(fallbackUrl, "_blank", "noopener,noreferrer");
      }
    } catch {
      window.open(fallbackUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+5514997415100";
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
