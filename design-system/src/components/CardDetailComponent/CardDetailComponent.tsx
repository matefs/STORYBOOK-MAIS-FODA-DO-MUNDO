import React, { useState } from 'react';
import './CardDetailComponent.css';
import Icon1 from './ICon-1-1.webp';
import Icon2 from './ICon-2-1.webp';
import Icon4 from './ICon-4.webp';

export interface CardDetailComponentItem {
    title: string;
    description?: string;
    thumbSrc: string;
    imageSrc: string;
}

export interface CardDetailComponentProps {
    items?: CardDetailComponentItem[];
    containerBgImage?: string;
    containerStyle?: React.CSSProperties;
}

const defaultItems: CardDetailComponentItem[] = [
    {
        title: 'Escolha o tipo de copy',
        description: 'Selecione entre stories, storytelling, legenda, criativo ou landing page.',
        thumbSrc: Icon1,
        imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
    },
    {
        title: 'Descreva seu produto/serviço',
        description: 'Escreva brevemente sobre o que é seu produto, serviço ou Saas.',
        thumbSrc: Icon2,
        imageSrc: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop',
    },
    {
        title: 'Copy profissional instantânea',
        description: 'Edite, refine e publique com técnicas profissionais.',
        thumbSrc: Icon4,
        imageSrc: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2000&auto=format&fit=crop',
    },
];

export const CardDetailComponent: React.FC<CardDetailComponentProps> = ({
    items = defaultItems,
    containerBgImage = 'https://lp.thecopypocket.com/wp-content/uploads/2025/12/aFrame-36-1.png',
    containerStyle,
}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    if (!items || items.length === 0) return null;

    return (
        <section className="ds-teste-section">
            <h2 className="ds-teste-section-title">Como funciona</h2>
            <div
                className="ds-teste-container ds-teste-container--side-image"
                style={{
                    backgroundImage: containerBgImage ? `url("${containerBgImage}")` : 'none',
                    ...containerStyle,
                }}
            >
                {/* Left side: List of smaller cards */}
                <div className="ds-teste-cards">
                    {items.map((item, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <div
                                key={index}
                                className={`ds-teste-card1 ${isActive ? 'ds-teste-card1--active' : ''}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <div className="ds-teste-image-box">
                                    <div className="ds-teste-image-box-wrapper">
                                        <figure className="ds-teste-image-box-img">
                                            <img src={item.thumbSrc} alt={item.title} />
                                        </figure>
                                        <div className="ds-teste-content">
                                            <span className="ds-teste-title">{item.title}</span>
                                            {item.description && (
                                                <span className="ds-teste-desc">{item.description}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Right side: Dynamic image display */}
                <div className="ds-teste-display-area">
                    <img
                        key={activeIndex}
                        src={items[activeIndex].imageSrc}
                        alt={items[activeIndex].title}
                        className="ds-teste-display-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default CardDetailComponent;
