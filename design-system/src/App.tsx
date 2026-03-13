import './App.css';

import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { ComponenteTeste } from './components/ComponenteTeste/ComponenteTeste';
import { ComparisonSection } from './components/ComparisonSection/ComparisonSection';
import { CardWithImageAndCta } from './components/CardWithImageAndCta/CardWithImageAndCta';
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

  return (
    <div className="app-container">
      <Header
        logoUrl="https://lp.thecopypocket.com/wp-content/uploads/2025/12/LOGO.svg"
        links={headerLinks}
        onLoginClick={() => alert('Área de login em breve!')}
      />

      <main>
        {/* HERO SECTION */}
        <section className="section-container" style={{ paddingTop: '120px' }}>
          <Hero
            title={<>Escreva textos que vendem <span style={{ color: '#f16517' }}>10x mais</span> em segundos</>}
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

        {/* CTA IMAGE MIX */}
        <section className="section-container">
          <CardWithImageAndCta
            overline="RESULTADOS IMEDIATOS"
            title="Sua conversão não pode esperar."
            description="Não perca mais tempo tentando adivinhar o que escreve ou contratando redatores que não entendem o seu produto. Gere sua copy validada com apenas alguns cliques."
            buttonText="Quero aumentar minhas vendas"
            imagePosition="left"
            imageUrl="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop"
          />
        </section>

        <Divider />

        {/* PRICING */}
        <section id="precos" className="section-container">
          <Heading level={2} size="2xl" style={{ textAlign: 'center', marginBottom: '60px' }}>Planos para todo nível de negócio</Heading>

          <div className="pricing-grid">
            <PricingCard
              title="Iniciante"
              price="R$ 47"
              frequency="/mês"
              description="Ideal para quem está começando agora e precisa validar ofertas."
              features={[
                "Acesso aos templates básicos",
                "Geração de até 50 copys/mês",
                "Suporte por email"
              ]}
              buttonLabel="Assinar Iniciante"
            />

            <PricingCard
              title="Profissional"
              price="R$ 97"
              frequency="/mês"
              description="Para negócios que precisam escalar suas vendas diariamente."
              features={[
                "Acesso a TODOS os templates",
                "Geração ILIMITADA de copys",
                "Base de conhecimento RAG",
                "Acesso ao WhatsApp da equipe"
              ]}
              buttonLabel="Assinar Profissional"
              className="primary-pricing-card ds-pulse-glow"
            />
          </div>
        </section>

        <Divider />

        {/* FAQ */}
        <section id="faq" className="faq-section">
          <Heading level={2} size="xl" className="faq-title">Dúvidas Frequentes</Heading>
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
