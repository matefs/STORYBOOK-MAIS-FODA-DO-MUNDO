import React from 'react';
import './FeatureGrid.css';
import { Button } from '../Button/Button';

export interface FeatureGridCardProps {
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
    buttonLabel: string;
    onButtonClick?: () => void;
    className?: string;
}

export const FeatureGridCard = ({
    icon,
    title,
    description,
    buttonLabel,
    onButtonClick,
    className = '',
}: FeatureGridCardProps) => {
    return (
        <div className={['ds-feature-grid-card', className].join(' ')}>
            <div className="ds-feature-grid-card-glow" />
            <div className="ds-feature-grid-card-content">
                <div className="ds-feature-grid-card-header">
                    <div className="ds-feature-grid-card-icon">{icon}</div>
                    <h3 className="ds-feature-grid-card-title">{title}</h3>
                </div>
                <div className="ds-feature-grid-card-description">{description}</div>
                <div className="ds-feature-grid-card-actions">
                    <Button variant="white" size="sm" label={buttonLabel} onClick={onButtonClick} />
                </div>
            </div>
        </div>
    );
};

export interface FeatureGridProps {
    cards: FeatureGridCardProps[];
    className?: string;
}

export const FeatureGrid = ({ cards, className = '' }: FeatureGridProps) => {
    return (
        <section className={['ds-feature-grid', className].join(' ')}>
            {cards.map((card, idx) => (
                <FeatureGridCard key={idx} {...card} />
            ))}
        </section>
    );
};
