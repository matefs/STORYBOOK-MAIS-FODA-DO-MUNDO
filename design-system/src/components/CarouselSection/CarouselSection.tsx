import React, { useRef, useEffect, useState } from 'react';
import './CarouselSection.css';
import { Heading } from '../Typography/Typography';

export interface CarouselSectionProps {
    title: string;
    items: React.ReactNode[];
    className?: string;
    autoPlayInterval?: number; // Tempo em ms, usar 0 para desativar
}

const ChevronLeft = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
);

const ChevronRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
);

export const CarouselSection = ({ title, items, className = '', autoPlayInterval = 2000 }: CarouselSectionProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const isManualScrolling = useRef(false);
    const manualScrollTimeout = useRef<NodeJS.Timeout | null>(null);

    // Triplicamos os itens para garantir espaço no início, meio e fim
    const [loopedItems] = useState([...items, ...items, ...items]);

    const pauseAutoScroll = () => {
        isManualScrolling.current = true;
        if (manualScrollTimeout.current) clearTimeout(manualScrollTimeout.current);
        manualScrollTimeout.current = setTimeout(() => {
            isManualScrolling.current = false;
        }, 600); // Aguarda terminar a animação de scroll smooth (aprox 600ms)
    };

    const scrollLeft = () => {
        if (scrollRef.current) {
            pauseAutoScroll();
            scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            pauseAutoScroll();
            scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth } = scrollRef.current;
        const oneThird = scrollWidth / 3;

        // Se passar dos dois terços, pula invisivelmente de volta para o terço do meio
        if (scrollLeft >= oneThird * 2) {
            // O comportamento `auto` desabilita animação de rolagem, tornando imperceptível!
            scrollRef.current.scrollTo({ left: scrollLeft - oneThird, behavior: 'auto' });
        }
        // Se enrolar no começo (scroll=0) pulamos invisivelmente pro meio preenchido
        else if (scrollLeft <= 0) {
            scrollRef.current.scrollTo({ left: scrollLeft + oneThird, behavior: 'auto' });
        }
    };

    useEffect(() => {
        // Inicializa o scroll no "Módulo Central", assim podemos rolar pra trás também sem travar
        if (scrollRef.current) {
            const initialThirdOffset = scrollRef.current.scrollWidth / 3;
            if (scrollRef.current.scrollLeft === 0) {
                scrollRef.current.scrollTo({ left: initialThirdOffset, behavior: 'auto' });
            }
        }
    }, [items]);

    useEffect(() => {
        if (autoPlayInterval <= 0) return;

        let animationFrameId: number;
        let lastTimestamp = 0;
        let accumulatedScroll = 0;

        // Define a velocidade (pixels por segundo)
        const speedPxPerSec = 50;

        const play = (timestamp: number) => {
            if (!lastTimestamp) lastTimestamp = timestamp;
            const deltaTime = timestamp - lastTimestamp;
            lastTimestamp = timestamp;

            if (scrollRef.current && deltaTime > 0 && !isManualScrolling.current) {
                // Calcula a fração de pixels que deveria mover no tempo decorrido
                accumulatedScroll += (speedPxPerSec * deltaTime) / 1000;

                // Mover apenas quando tivermos pelo menos 1 pixel inteiro acumulado
                if (accumulatedScroll >= 1) {
                    const pxToScroll = Math.floor(accumulatedScroll);
                    scrollRef.current.scrollLeft += pxToScroll;
                    accumulatedScroll -= pxToScroll;
                }
            }
            animationFrameId = requestAnimationFrame(play);
        };

        animationFrameId = requestAnimationFrame(play);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [autoPlayInterval]);

    return (
        <section
            className={['ds-carousel-section', className].join(' ')}
        >
            <div className="ds-carousel-header">
                <Heading level={2} size="xl" className="ds-carousel-title">
                    {title}
                </Heading>
                <div className="ds-carousel-nav">
                    <button className="ds-carousel-nav-btn" onClick={scrollLeft} aria-label="Anterior">
                        <ChevronLeft />
                    </button>
                    <button className="ds-carousel-nav-btn" onClick={scrollRight} aria-label="Próximo">
                        <ChevronRight />
                    </button>
                </div>
            </div>
            {/* onScroll handle pra reajustar silencioso sem bug de animação! */}
            <div className="ds-carousel-viewport" ref={scrollRef} onScroll={handleScroll}>
                <div className="ds-carousel-track">
                    {loopedItems.map((item, index) => (
                        <div key={index} className="ds-carousel-item">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
