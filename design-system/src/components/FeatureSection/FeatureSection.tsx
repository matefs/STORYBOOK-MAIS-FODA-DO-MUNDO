import React from 'react';
import './FeatureSection.css';
import { Heading, Text } from '../Typography/Typography';

export interface FeatureSectionProps {
    label: string;
    title: string;
    description: string;
    imageNode?: React.ReactNode;
    imageLeft?: boolean;
    className?: string;
}

export const FeatureSection = ({
    label,
    title,
    description,
    imageNode,
    imageLeft = false,
    className = '',
}: FeatureSectionProps) => {
    return (
        <section className={['ds-feature-section', imageLeft ? 'ds-feature-section--inverse' : '', className].join(' ')}>
            <div className="ds-feature-section-content">
                <Text size="md" className="ds-feature-section-label">
                    {label}
                </Text>
                <Heading level={2} size="2xl" className="ds-feature-section-title">
                    {title}
                </Heading>
                <Text size="lg" color="secondary" className="ds-feature-section-description">
                    {description}
                </Text>
            </div>
            {imageNode && (
                <div className="ds-feature-section-image">
                    {imageNode}
                </div>
            )}
        </section>
    );
};
