import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "OzenFit Caps realmente funciona para perda de peso?",
    answer: "Sim! OzenFit Caps é formulado com ingredientes naturais cientificamente comprovados que atuam no metabolismo, controle da fome e queima de gordura. Os resultados variam conforme o organismo e quando combinado com uma alimentação equilibrada e exercícios, os efeitos são potencializados."
  },
  {
    question: "Como devo tomar OzenFit Caps?",
    answer: "Recomenda-se tomar 2 cápsulas ao dia, preferencialmente 30 minutos antes das principais refeições, com um copo cheio de água. Não exceda a dose recomendada e mantenha uma hidratação adequada ao longo do dia."
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "Os primeiros resultados podem ser percebidos já nas primeiras semanas, como redução do inchaço e aumento da disposição. Para resultados mais significativos na perda de peso e redução de medidas, recomenda-se o uso contínuo por pelo menos 3 meses."
  },
  {
    question: "OzenFit Caps tem efeitos colaterais?",
    answer: "OzenFit Caps é formulado com ingredientes 100% naturais e geralmente é bem tolerado. Algumas pessoas podem experimentar leve desconforto intestinal nos primeiros dias devido ao psyllium. Se você tiver alguma condição médica ou estiver tomando medicamentos, consulte seu médico antes de usar."
  },
  {
    question: "Posso tomar se tenho alguma restrição alimentar?",
    answer: "OzenFit Caps é livre de glúten e adequado para a maioria das dietas. No entanto, se você tem alergias específicas ou restrições médicas, recomendamos consultar a lista completa de ingredientes e conversar com seu médico ou nutricionista."
  },
  {
    question: "Grávidas e lactantes podem usar?",
    answer: "Não recomendamos o uso de OzenFit Caps durante a gravidez ou amamentação sem orientação médica. Nestes períodos, é fundamental consultar seu obstetra ou pediatra antes de iniciar qualquer suplementação."
  },
  {
    question: "Qual a diferença entre os kits disponíveis?",
    answer: "A diferença está na quantidade de frascos e no custo-benefício. Kits maiores oferecem melhor desconto e são ideais para tratamentos mais longos. O kit de 3 frascos é o mais vendido pois permite ver resultados consistentes, enquanto o kit de 5 ou 10 frascos garante economia e resultados duradouros."
  },
  {
    question: "Como é feita a entrega?",
    answer: "Após a confirmação do pagamento, seu pedido é processado e enviado com segurança. O prazo de entrega varia conforme sua região. Você receberá um código de rastreamento para acompanhar seu pedido."
  },
  {
    question: "Existe garantia?",
    answer: "Sim! Trabalhamos com garantia de satisfação. Se você não ficar satisfeito com o produto, pode solicitar reembolso conforme os termos estabelecidos no momento da compra."
  },
  {
    question: "OzenFit Caps substitui alimentação saudável e exercícios?",
    answer: "Não. OzenFit Caps é um suplemento nutracêutico que auxilia no processo de emagrecimento, mas não substitui uma alimentação balanceada e a prática regular de exercícios físicos. Para melhores resultados, recomendamos combinar o uso do produto com hábitos saudáveis."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-background" id="faq">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre OzenFit Caps e descubra como ele pode te ajudar
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-2 rounded-lg px-6 hover:border-primary/50 transition-colors bg-card/50 backdrop-blur"
            >
              <AccordionTrigger className="text-left font-semibold hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
