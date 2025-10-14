import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
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

  return (
    <Button
      onClick={handleWhatsAppClick}
      variant="cta"
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full w-16 h-16 p-0 shadow-2xl hover:scale-110 transition-all duration-300"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </Button>
  );
};

export default WhatsAppButton;
