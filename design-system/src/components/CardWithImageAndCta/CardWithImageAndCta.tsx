import React from 'react';
import './CardWithImageAndCta.css';
import { Button } from '../Button/Button';
import { Heading, Text } from '../Typography/Typography';

export interface CardWithImageAndCtaProps {
    overline?: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink?: string;
    imageUrl: string;
    imageAlt?: string;
    imagePosition?: 'left' | 'right';
    className?: string;
}

export const CardWithImageAndCta: React.FC<CardWithImageAndCtaProps> = ({
    overline = 'TESTE AGORA',
    title = 'Pare de perder vendas por causa de copy fraca.',
    description = 'Comece hoje e veja suas conversões aumentarem usando técnicas dos maiores copywriters da história.',
    buttonText = 'Começar agora',
    buttonLink,
    imageUrl = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    imageAlt = 'Copywriter Image',
    imagePosition = 'right',
    className = '',
}) => {
    return (
        <div className={`ds-card-image-cta ${className} ds-card-image-cta--img-${imagePosition}`}>
            <div className="ds-card-image-cta-content">
                {overline && (
                    <span className="ds-card-image-cta-overline">{overline}</span>
                )}

                <Heading level={2} size="xl" className="ds-card-image-cta-title">
                    {title}
                </Heading>

                <Text size="md" color="secondary" className="ds-card-image-cta-description">
                    {description}
                </Text>

                <div className="ds-card-image-cta-button-wrapper">
                    <Button
                        variant="primary"
                        size="md"
                        label={buttonText}
                        onClick={() => buttonLink && window.open(buttonLink, '_blank')}
                    />
                </div>
            </div>

            <div className="ds-card-image-cta-image-container">
                <img
                    src={imageUrl}
                    alt={imageAlt}
                    className="ds-card-image-cta-image"
                />
            </div>
        </div>
    );
};
