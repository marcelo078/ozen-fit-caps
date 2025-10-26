import { Helmet } from "react-helmet";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Ingredients from "@/components/Ingredients";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "OzenFit Caps",
    "description": "Nutracêutico natural para emagrecimento com fórmula exclusiva de 8 ingredientes: Psyllium, Cúrcuma, Guaraná, Triptofano, Ácido Clorogênico, Piperina, Antocianinas e Picolinato de Cromo. Acelera o metabolismo, reduz medidas e controla a fome de forma natural e segura.",
    "brand": {
      "@type": "Brand",
      "name": "OzenFit"
    },
    "offers": {
      "@type": "AggregateOffer",
      "url": "https://app.monetizze.com.br/r/AWX25517410",
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1247"
    }
  };

  return (
    <>
      <Helmet>
        <title>OzenFit Caps - Emagrecedor Natural | Reduza Medidas com Ingredientes Naturais</title>
        <meta 
          name="description" 
          content="OzenFit Caps: nutracêutico com 8 ingredientes naturais para perda de peso. Acelera metabolismo, controla fome e reduz medidas. Fórmula exclusiva com Psyllium, Guaraná e Cúrcuma." 
        />
        <meta name="keywords" content="ozenfitcaps, ozenfit caps, emagrecedor natural, perder peso, suplemento natural, reduzir medidas, nutracêutico, psyllium, guaraná, cúrcuma, ácido clorogênico" />
        <link rel="canonical" href="https://ozenfitcaps.fun" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="product" />
        <meta property="og:title" content="OzenFit Caps - Emagrecedor Natural e Seguro" />
        <meta property="og:description" content="Perca peso de forma natural com OzenFit Caps. Fórmula exclusiva com 8 ingredientes comprovados para acelerar metabolismo e reduzir medidas." />
        <meta property="og:url" content="https://ozenfitcaps.fun" />
        <meta property="og:site_name" content="OzenFit Caps" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OzenFit Caps - Emagrecedor Natural" />
        <meta name="twitter:description" content="Acelere seu metabolismo e perca peso com ingredientes 100% naturais" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
        
        {/* Additional SEO tags */}
        <meta name="author" content="OzenFit" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta httpEquiv="content-language" content="pt-BR" />
      </Helmet>

      <main>
        <Hero />
        <Benefits />
        <Ingredients />
        <Pricing />
        <FAQ />
        <Footer />
      </main>
    </>
  );
};

export default Index;
