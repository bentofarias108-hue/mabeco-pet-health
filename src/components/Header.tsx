import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Header = () => {
  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/message/2CLLVIOFUVFKM1";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
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
