import { Button } from "@/components/ui/button";
import heroImage from "@/assets/ozenfit-mulher-academia.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-secondary/30 to-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
                ✨ Emagrecimento Natural e Saudável
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              OzenFit Caps: Seu Aliado Natural Para{" "}
              <span className="text-primary">Perder Peso</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Nutracêutico com fórmula exclusiva que combina 8 ingredientes naturais comprovados para acelerar o metabolismo, reduzir medidas e controlar a fome de forma segura.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary-glow hover:shadow-[var(--shadow-primary)] transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="https://app.monetizze.com.br/r/AWX25517410" target="_blank" rel="noopener noreferrer">
                  👉 Ver Preço e Ofertas Atuais
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-2 hover:bg-accent"
                asChild
              >
                <a href="#como-funciona">
                  Como Funciona?
                </a>
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-primary text-xl">✓</span>
                <span>100% Natural</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary text-xl">✓</span>
                <span>Sem Glúten</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary text-xl">✓</span>
                <span>Fórmula Exclusiva</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-3xl" />
            <img 
              src={heroImage} 
              alt="Mulher fit segurando frasco de OzenFit Caps - Suplemento natural para emagrecimento e perda de peso"
              className="relative z-10 w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
