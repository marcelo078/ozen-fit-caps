import { Card, CardContent } from "@/components/ui/card";
import productImage from "@/assets/ozenfit-pote-principal.webp";

const ingredients = [
  {
    name: "Psyllium",
    benefit: "Promove saciedade e melhora o trânsito intestinal"
  },
  {
    name: "Cúrcuma",
    benefit: "Poderoso anti-inflamatório natural"
  },
  {
    name: "Guaraná em Pó",
    benefit: "Energia natural e aceleração do metabolismo"
  },
  {
    name: "Triptofano",
    benefit: "Controle do apetite e melhora do humor"
  },
  {
    name: "Ácido Clorogênico",
    benefit: "Reduz absorção de gordura e carboidratos"
  },
  {
    name: "Piperina",
    benefit: "Aumenta a biodisponibilidade dos nutrientes"
  },
  {
    name: "Antocianinas",
    benefit: "Poderoso antioxidante e desintoxicante"
  },
  {
    name: "Picolinato de Cromo",
    benefit: "Regula níveis de açúcar no sangue"
  }
];

const Ingredients = () => {
  return (
    <section className="py-20 bg-background" id="como-funciona">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Como Funciona o <span className="text-primary">OzenFit Caps?</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cada cápsula contém uma combinação sinérgica de 8 ingredientes naturais cuidadosamente selecionados que trabalham em diferentes frentes para otimizar seu processo de emagrecimento.
              </p>
            </div>
            
            <div className="space-y-4">
              {ingredients.map((ingredient, index) => (
                <Card key={index} className="border-l-4 border-l-primary bg-accent/30">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mt-0.5">
                        {index + 1}
                      </span>
                      <div>
                        <h4 className="font-bold text-foreground">{ingredient.name}</h4>
                        <p className="text-sm text-muted-foreground">{ingredient.benefit}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-3xl blur-3xl animate-pulse" />
            <img 
              src={productImage}
              alt="Frasco de OzenFit Caps mostrando composição com Psyllium, Cúrcuma, Guaraná, Triptofano e outros ingredientes naturais para emagrecimento"
              className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
