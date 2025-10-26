import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import kit1 from "@/assets/ozenfit-frasco-60-capsulas.webp";
import kit3 from "@/assets/ozenfit-kit-3-frascos.webp";
import kit5 from "@/assets/ozenfit-kit-5-frascos.webp";
import kit10 from "@/assets/ozenfit-kit-10-frascos.webp";

const pricingOptions = [
  {
    title: "Experimente",
    bottles: 1,
    image: kit1,
    highlight: false,
    link: "https://app.monetizze.com.br/r/AWX25517410?u=c&pl=TE276932",
    description: "Ideal para conhecer o produto"
  },
  {
    title: "Mais Vendido",
    bottles: 3,
    image: kit3,
    highlight: true,
    link: "https://app.monetizze.com.br/r/AWX25517410?u=c&pl=CN276930",
    description: "Melhor custo-benefício",
    badge: "🔥 Popular"
  },
  {
    title: "Tratamento Completo",
    bottles: 5,
    image: kit5,
    highlight: false,
    link: "https://app.monetizze.com.br/r/AWX25517410?u=c&pl=FW276935",
    description: "Resultados mais duradouros"
  },
  {
    title: "Super Oferta",
    bottles: 10,
    image: kit10,
    highlight: false,
    link: "https://app.monetizze.com.br/r/AWX25517410?u=c&pl=BM276936",
    description: "Máximo desconto",
    badge: "💎 Melhor Preço"
  }
];

const Pricing = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background" id="precos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Escolha Seu <span className="text-primary">Kit Ideal</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quanto maior o kit, maior o desconto e melhores os resultados. Invista na sua transformação!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricingOptions.map((option, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                option.highlight 
                  ? 'border-primary border-2 shadow-[var(--shadow-primary)] scale-105' 
                  : 'border-2 hover:border-primary/50'
              }`}
            >
              {option.badge && (
                <Badge className="absolute top-4 right-4 z-10 bg-gradient-to-r from-primary to-primary-glow">
                  {option.badge}
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl">{option.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{option.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="relative aspect-square rounded-lg overflow-hidden bg-accent/20">
                  <img 
                    src={option.image}
                    alt={`Kit OzenFit Caps ${option.bottles} ${option.bottles === 1 ? 'frasco' : 'frascos'} - Suplemento emagrecedor natural`}
                    className="w-full h-full object-contain p-4"
                    loading="lazy"
                  />
                </div>
                
                <div className="text-center py-2">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {option.bottles} {option.bottles === 1 ? 'Frasco' : 'Frascos'}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    60 cápsulas por frasco
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-[var(--shadow-primary)] transition-all duration-300"
                  size="lg"
                  asChild
                >
                  <a href={option.link} target="_blank" rel="noopener noreferrer">
                    Ver Oferta Especial
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center gap-6 bg-accent/50 rounded-2xl p-6 border-2 border-primary/20">
            <div className="text-4xl">🎁</div>
            <div className="text-left">
              <div className="font-bold text-lg">Garantia de Satisfação</div>
              <div className="text-sm text-muted-foreground">Compre com confiança e segurança</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
