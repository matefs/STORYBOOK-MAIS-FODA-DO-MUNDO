import React from 'react';
import './Hero.css';
import { Heading, Text } from '../Typography/Typography';
import { Button } from '../Button/Button';

export interface HeroProps {
    title: React.ReactNode;
    subtitle: React.ReactNode;
    buttonLabel: string;
    onButtonClick?: () => void;
    className?: string;
    highlightText?: string;
}

export const Hero = ({
    title,
    subtitle,
    buttonLabel,
    onButtonClick,
    className = '',
}: HeroProps) => {
    return (
        <section className={['ds-hero', className].join(' ')}>
            <div className="ds-hero-content">
                <Heading level={1} size="3xl" className="ds-hero-title">
                    {title}
                </Heading>
                <Text size="lg" color="secondary" className="ds-hero-subtitle">
                    {subtitle}
                </Text>
                <div className="ds-hero-actions">
                    <Button variant="primary" size="lg" label={buttonLabel} onClick={onButtonClick} />
                </div>
            </div>
        </section>
    );
};
