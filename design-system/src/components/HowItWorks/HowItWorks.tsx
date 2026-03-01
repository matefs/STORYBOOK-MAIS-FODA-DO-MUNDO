import React, { useState } from 'react';
import './HowItWorks.css';
import { Heading } from '../Typography/Typography';

export interface HowItWorksStep {
    id: string | number;
    iconUrl?: string; // Optional if we just want title/desc
    title: string;
    description: string;
    imageNode?: React.ReactNode;
}

export interface HowItWorksProps {
    title?: string;
    steps: HowItWorksStep[];
    className?: string;
}

export const HowItWorks = ({ title = 'Como funciona', steps, className = '' }: HowItWorksProps) => {
    const [activeStepId, setActiveStepId] = useState<string | number>(steps[0]?.id);

    const activeStep = steps.find(s => s.id === activeStepId) || steps[0];

    return (
        <section className={['ds-how-it-works', className].join(' ')}>
            {title && (
                <Heading level={2} size="2xl" className="ds-how-it-works-main-title">
                    {title}
                </Heading>
            )}

            <div className="ds-how-it-works-container">
                <div className="ds-how-it-works-steps">
                    {steps.map((step) => {
                        const isActive = step.id === activeStepId;
                        return (
                            <div
                                key={step.id}
                                className={['ds-how-it-works-card', isActive ? 'ds-how-it-works-card--active' : ''].join(' ')}
                                onClick={() => setActiveStepId(step.id)}
                            >
                                <div className="ds-how-it-works-card-content">
                                    <h3 className="ds-how-it-works-card-title">{step.title}</h3>
                                    <p className="ds-how-it-works-card-description">{step.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="ds-how-it-works-preview">
                    <div className="ds-how-it-works-preview-inner">
                        {activeStep?.imageNode}
                    </div>
                </div>
            </div>
        </section>
    );
};
