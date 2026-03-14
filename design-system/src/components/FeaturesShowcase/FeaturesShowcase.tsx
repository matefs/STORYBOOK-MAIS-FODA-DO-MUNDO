import './FeaturesShowcase.css';
import { Heading, Text } from '../Typography/Typography';

export const FeaturesShowcase = () => {
    return (
        <section className="ds-features-showcase">
            <header className="ds-features-header">
                <div>
                    <Heading level={2} size="3xl" className="ds-features-title">
                        Feito para profissionais que precisam de <span>escala e controle.</span>
                    </Heading>
                </div>
                <div className="ds-features-desc-container">
                    <Text size="lg" color="secondary" className="ds-features-desc">
                        A IA trabalha dentro das regras da sua marca. Garantimos a proteção do seu tom de voz, com precisão técnica nos frameworks de copywriting e rastreabilidade total de tudo que foi gerado no seu histórico.
                    </Text>
                </div>
            </header>

            <div className="ds-features-grid">
                {/* Card 1 */}
                <article className="ds-feature-card group">
                    <div className="ds-feature-card-img">
                        <div className="ds-skew-ui">
                            <div className="ds-mock-item">
                                <span className="ds-mock-text">Página de Vendas Branca</span>
                                <span className="ds-mock-badge ds-badge-orange">Alta Conv.</span>
                            </div>
                            <div className="ds-mock-item">
                                <span className="ds-mock-text">E-mail de Lançamento</span>
                                <span className="ds-mock-badge ds-badge-green">Validado</span>
                            </div>
                            <div className="ds-mock-item ds-border-blue">
                                <span className="ds-mock-text">Anúncio Facebook Ads</span>
                                <span className="ds-mock-badge ds-badge-red">Escala</span>
                            </div>
                        </div>
                    </div>
                    <div className="ds-feature-card-footer">
                        <h3 className="ds-feature-card-heading">
                            Formatos Validados, Prontos para o seu Nicho
                        </h3>
                        <div className="ds-feature-icon">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                            </svg>
                        </div>
                    </div>
                </article>

                {/* Card 2 */}
                <article className="ds-feature-card group">
                    <div className="ds-feature-card-img">
                        <div className="ds-skew-ui ds-w-240">
                            <div className="ds-mock-card">
                                <div className="ds-mock-card-header">
                                    <div className="ds-dot-red"></div>
                                    <span>Processamento AI</span>
                                </div>
                                <div className="ds-mock-card-body">
                                    <div className="ds-mock-row">
                                        <div className="ds-check-circle"><div className="ds-check"></div></div>
                                        <div className="ds-bar-1"></div>
                                    </div>
                                    <div className="ds-mock-row">
                                        <div className="ds-check-circle"><div className="ds-check"></div></div>
                                        <div className="ds-bar-2"></div>
                                    </div>
                                    <div className="ds-mock-row">
                                        <div className="ds-pulse-circle"></div>
                                        <div className="ds-bar-3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ds-feature-card-footer">
                        <h3 className="ds-feature-card-heading">
                            Geração Inteligente, Reduzindo Fricções
                        </h3>
                        <div className="ds-feature-icon">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                            </svg>
                        </div>
                    </div>
                </article>

                {/* Card 3 */}
                <article className="ds-feature-card group">
                    <div className="ds-feature-card-img">
                        <div className="ds-icon-container">
                            <div className="ds-dotted-bg"></div>
                            <div className="ds-fingerprint-box">
                                <svg className="ds-fingerprint" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 3m0 0c.53 0 1.039.05 1.531.145m-1.531-.145a9.983 9.983 0 00-1.023 3.942 9.99 9.99 0 003.23 7.451m-.832 4.493A10.001 10.001 0 0112 21c-1.306 0-2.546-.25-3.687-.704m4.71-1.908a9.927 9.927 0 01-1.023-3.942m0 0c.137.013.275.02.414.02 1.395 0 2.697-.451 3.75-1.213m-3.75 1.193a9.969 9.969 0 004.71 1.908c.058-.444.088-.897.088-1.356 0-1.112-.202-2.176-.57-3.156m-1.336 6.47l.01.012M12 7a4 4 0 014 4m-4-4a4 4 0 00-4 4"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="ds-feature-card-footer">
                        <h3 className="ds-feature-card-heading">
                            Proteção de Identidade e Segurança da Marca
                        </h3>
                        <div className="ds-feature-icon">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                            </svg>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default FeaturesShowcase;
