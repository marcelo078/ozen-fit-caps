import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: "🔥",
    title: "Acelera o Metabolismo",
    description: "O guaraná e a piperina trabalham juntos para aumentar a termogênese, fazendo seu corpo queimar mais calorias naturalmente."
  },
  {
    icon: "🎯",
    title: "Reduz Medidas",
    description: "O ácido clorogênico auxilia na redução da absorção de gordura, enquanto as antocianinas ajudam na eliminação de toxinas."
  },
  {
    icon: "😌",
    title: "Controla a Fome",
    description: "O psyllium e triptofano promovem saciedade prolongada, reduzindo os episódios de compulsão alimentar."
  },
  {
    icon: "💪",
    title: "Mais Energia",
    description: "Ingredientes naturais como guaraná fornecem energia sustentada sem os efeitos colaterais da cafeína sintética."
  },
  {
    icon: "🛡️",
    title: "Ação Anti-Inflamatória",
    description: "A cúrcuma possui poderosas propriedades anti-inflamatórias que auxiliam na recuperação e bem-estar geral."
  },
  {
    icon: "⚖️",
    title: "Regula o Açúcar",
    description: "O picolinato de cromo ajuda a regular os níveis de glicose no sangue, reduzindo a vontade por doces."
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20" id="beneficios">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Por Que Escolher <span className="text-primary">OzenFit Caps?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma fórmula cientificamente desenvolvida com ingredientes naturais que agem em sinergia para resultados reais e duradouros.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-primary)] hover:-translate-y-1 bg-card/50 backdrop-blur"
            >
              <CardContent className="p-6 space-y-4">
                <div className="text-5xl">{benefit.icon}</div>
                <h3 className="text-xl font-bold">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
