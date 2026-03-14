import React, { useEffect } from 'react';
import './App.css';
import Lenis from 'lenis';

import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { ComponenteTeste } from './components/ComponenteTeste/ComponenteTeste';
import { FeaturesShowcase } from './components/FeaturesShowcase/FeaturesShowcase';
import { ComparisonSection } from './components/ComparisonSection/ComparisonSection';
import { PricingCard } from './components/PricingCard/PricingCard';
import { Accordion } from './components/Accordion/Accordion';
import { Divider } from './components/Divider/Divider';
import { Heading } from './components/Typography/Typography';

function App() {
  const headerLinks = [
    { label: 'Funcionalidades', href: '#funcionalidades' },
    { label: 'Comparação', href: '#comparativo' },
    { label: 'Preços', href: '#precos' },
    { label: 'FAQ', href: '#faq' },
  ];

  const faqItems = [
    {
      id: '1',
      title: 'Posso cancelar a qualquer momento?',
      content: 'Sim, você tem total liberdade para cancelar sua assinatura quando quiser, sem enrolação ou multas escondidas.'
    },
    {
      id: '2',
      title: 'A copy gerada é única?',
      content: 'Completamente. Nosso sistema utiliza RAG e contextos exclusivos da sua marca para garantir que nenhuma copy seja igual à de outra pessoa.'
    },
    {
      id: '3',
      title: 'Preciso saber sobre copywriting para usar?',
      content: 'Não! A Copy.Pocket foi treinada com os maiores livros e frameworks de copy do mercado. Ela faz o trabalho pesado para você.'
    }
  ];

  useEffect(() => {
    // Inicializa o Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    (window as any).lenisInstance = lenis; // Globais para facilitar na âncora simples sem Redux

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Limpa o lenis na desmontagem
    return () => {
      lenis.destroy();
      delete (window as any).lenisInstance;
    };
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const lenis = (window as any).lenisInstance;
        if (lenis) {
          lenis.scrollTo(target);
        } else {
          target.scrollIntoView({ behavior: 'smooth' }); // Fallback if Lenis is not available
        }
      }
    }
  };

  return (
    <div className="app-container">
      <Header
        logoUrl="https://lp.thecopypocket.com/wp-content/uploads/2025/12/LOGO.svg"
        links={headerLinks}
        onLoginClick={() => alert('Área de login em breve!')}
        onLinkClick={handleAnchorClick}
      />

      <main>
        {/* HERO SECTION */}
        <section className="section-container hero-wrapper">
          <Hero
            title={
              <>
                Escreva textos que vendem <strong>10x mais</strong> em <span style={{ color: '#F16517' }}>segundos</span>
              </>
            }
            subtitle="Tenha o poder dos maiores copywriters do mundo na palma da sua mão. Escreva anúncios, e-mails e páginas de vendas que convertem como mágica."
            buttonLabel="Começar meu teste grátis"
          />
        </section>

        <Divider />

        {/* HOW IT WORKS / COMPONENTE TESTE */}
        <section id="funcionalidades" style={{ background: 'var(--color-surface, #121212)' }}>
          <div className="section-container">
            <ComponenteTeste />
          </div>
        </section>

        <Divider />

        {/* COMPARISON */}
        <section id="comparativo">
          <ComparisonSection />
        </section>

        <Divider />



        <FeaturesShowcase />

        <Divider />

        {/* PRICING */}
        <section id="precos" className="section-container">
          <Heading level={2} size="2xl" style={{ textAlign: 'center', marginBottom: '60px' }}>Planos simples, resultados gigantes</Heading>

          <div className="pricing-grid">
            <PricingCard
              title="Plano Iniciante"
              price="R$ 47"
              frequency="/mês"
              description="Ideal para testar o poder de uma copy matadora."
              features={[
                "Copys limitadas a 50/mês",
                "Acesso aos modelos essenciais",
                "Suporte por e-mail",
              ]}
              buttonLabel="Assinar plano iniciante"
            />

            <PricingCard
              title="Plano Mensal"
              price="R$ 97"
              frequency="/mês"
              description="Tudo que você precisa incluso para alavancar hoje."
              features={[
                "Copys ilimitadas",
                "Base de conhecimento principal",
                "Histórico ilimitado",
                "Atualizações constantes"
              ]}
              buttonLabel="Assinar plano mensal"
              className="primary-pricing-card ds-pulse-glow"
            />

            <PricingCard
              title="Plano Anual"
              price="R$ 77"
              frequency="/mês"
              description="Faturado anualmente. O melhor custo-benefício para levar a sério seu negócio."
              features={[
                "Tudo do plano Mensal",
                "Prioridade no suporte VIP",
                "Modelos ocultos de copy",
                "Treinamento de indução ao RAG"
              ]}
              buttonLabel="Assinar plano anual"
            />
          </div>
        </section>

        <Divider />

        {/* FAQ */}
        <section id="faq" className="faq-section">
          <Heading level={2} size="xl" className="faq-title" style={{ marginBottom: '40px' }}>Dúvidas Frequentes</Heading>
          <Accordion items={faqItems} />
        </section>

      </main>

      <footer className="footer">
        <p>© 2026 Copy.Pocket. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
