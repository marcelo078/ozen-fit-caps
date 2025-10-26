import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-secondary/20 to-primary/5 border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Pronto Para Transformar Seu Corpo de Forma <span className="text-primary">Natural?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Milhares de pessoas já estão conquistando seus objetivos com OzenFit Caps. Não perca tempo, comece sua transformação hoje!
          </p>
          
          <Button 
            size="lg"
            className="text-lg px-12 py-6 bg-gradient-to-r from-primary to-primary-glow hover:shadow-[var(--shadow-primary)] transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="https://app.monetizze.com.br/r/AWX25517410" target="_blank" rel="noopener noreferrer">
              🎯 Garantir Meu Desconto Agora
            </a>
          </Button>
        </div>
        
        <div className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground space-y-4">
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#beneficios" className="hover:text-primary transition-colors">Benefícios</a>
            <a href="#como-funciona" className="hover:text-primary transition-colors">Como Funciona</a>
            <a href="#precos" className="hover:text-primary transition-colors">Preços</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          </div>
          
          <p className="max-w-2xl mx-auto">
            <strong>Aviso Legal:</strong> Os resultados podem variar de pessoa para pessoa. Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença. Consulte sempre um profissional de saúde antes de iniciar qualquer programa de suplementação.
          </p>
          
          <p>© 2025 OzenFit Caps. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
