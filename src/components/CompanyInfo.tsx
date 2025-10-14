import { CheckCircle } from "lucide-react";

const CompanyInfo = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Nutrivitta / MABECO
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Alimentação Natural Premium para Pets — mais Saúde, Sabor e Amor em cada receita.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <article className="p-6 rounded-xl bg-card shadow animate-enter">
            <h3 className="text-xl font-semibold mb-3">Quem Somos</h3>
            <p className="text-muted-foreground">
              A Nutrivitta é a linha da MABECO especializada em desenvolver alimentos 100% naturais, nutritivos e seguros para cães. Nossos produtos substituem a ração ultraprocessada e oferecem petiscos e refeições saudáveis que trazem mais qualidade de vida e longevidade aos pets.
            </p>
          </article>

          <article className="p-6 rounded-xl bg-card shadow animate-enter">
            <h3 className="text-xl font-semibold mb-4">Diferenciais</h3>
            <ul className="space-y-2">
              {[
                "100% Naturais",
                "Sem Conservantes",
                "Balanceados por Veterinários Nutrólogos",
                "Produzidos artesanalmente, com tecnologia e estrutura para atender grandes demandas",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-center">Produtos Principais</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-card shadow">
              <h4 className="font-semibold mb-2">Linha Nutritiva</h4>
              <p className="text-sm text-muted-foreground">
                Refeições balanceadas, cardápio completo com 14 sabores, vendidos em kits Nutrivitta Naturale Premium, além de Caldo de Osso.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card shadow">
              <h4 className="font-semibold mb-2">Linha Snacks Naturais</h4>
              <p className="text-sm text-muted-foreground">
                Biscoitos e Petiscos naturais de vários sabores, Bocadinho Pet, Alfachoco, Chips de carnes.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card shadow">
              <h4 className="font-semibold mb-2">Linha Experiência</h4>
              <p className="text-sm text-muted-foreground">Sorvete Pet, Cerveja Pet, Bolos.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-center">Vantagens da Parceria</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="p-6 rounded-xl bg-card shadow space-y-2">
              {[
                "Produtos exclusivos que agregam valor ao parceiro.",
                "Marca premium que fortalece a imagem do espaço.",
                "Amostras e condições comerciais diferenciadas para parceiros.",
                "Apoio em divulgação e co-marketing (redes sociais, campanhas e materiais promocionais).",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm md:text-base text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="p-6 rounded-xl bg-card shadow">
              <h4 className="font-semibold mb-3">Contato</h4>
              <div className="space-y-2 text-sm md:text-base text-foreground">
                <p><strong>WhatsApp (Marília e região):</strong> (14) 99741-5100</p>
                <p><strong>WhatsApp (Parcerias / SP):</strong> (11) 91966-5100</p>
                <p><strong>Site:</strong> www.mabecoan.com.br</p>
                <p><strong>Instagram:</strong> @mabeco.an</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default CompanyInfo;
