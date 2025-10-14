import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Biscoitos = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Biscoitos
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Em breve, nossos deliciosos biscoitos naturais para seu pet.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Biscoitos;
