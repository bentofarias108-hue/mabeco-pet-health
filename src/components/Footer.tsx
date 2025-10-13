import { MapPin, Clock, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">MABECO</h3>
            <p className="text-white/80 leading-relaxed">
              Alimentação natural de qualidade que transforma a saúde e o bem-estar 
              dos pets. Refeições preparadas com amor, ciência e ingredientes selecionados.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-white/80">
                  Disponível para entrega em toda a região
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <a href="mailto:mabecoan@gmail.com" className="text-white/80 hover:text-primary transition-colors">
                  mabecoan@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div className="text-white/80">
                  <p>Marília e região: (14) 99741-5100</p>
                  <p>Parcerias: (11) 91966-5100</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold">Redes Sociais</h4>
            <p className="text-white/80">
              Acompanhe dicas de nutrição e novidades.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} MABECO. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
