import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import mabecoLogo from "@/assets/mabeco-logo.png";

const Header = () => {
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
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <img 
              src={mabecoLogo} 
              alt="MABECO Logo" 
              className="w-12 h-12 rounded-full object-cover"
            />
            <span className="text-2xl font-bold text-foreground">MABECO</span>
          </div>

          <Button 
            variant="cta" 
            onClick={handleWhatsAppClick}
            className="hidden sm:flex"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Contato
          </Button>

          <Button 
            variant="cta" 
            size="icon"
            onClick={handleWhatsAppClick}
            className="sm:hidden"
          >
            <MessageCircle className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
