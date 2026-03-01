import React from 'react';
import './PricingCard.css';
import { Heading, Text } from '../Typography/Typography';
import { Button } from '../Button/Button';
import { IconList } from '../IconList/IconList';

export interface PricingCardProps {
    title: string;
    price: string;
    frequency: string;
    description: string;
    features: string[];
    buttonLabel: string;
    onButtonClick?: () => void;
    className?: string;
}

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
        <rect x="0.5" y="0.5" width="37" height="37" rx="11.5" fill="url(#paint0_linear)"></rect>
        <rect x="0.5" y="0.5" width="37" height="37" rx="11.5" stroke="url(#paint1_linear)"></rect>
        <path d="M16 27.4199L9.79001 21.2099L12.62 18.3799L16 21.7699L25.88 11.8799L28.71 14.7099L16 27.4199Z" fill="url(#paint2_linear)"></path>
        <defs>
            <linearGradient id="paint0_linear" x1="19" y1="-5" x2="19" y2="38" gradientUnits="userSpaceOnUse">
                <stop offset="0.0384615" stopColor="#A5FFB5"></stop>
                <stop offset="1" stopColor="#2D6330"></stop>
            </linearGradient>
            <linearGradient id="paint1_linear" x1="19" y1="0" x2="19" y2="38" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFECE2"></stop>
                <stop offset="1" stopColor="#FFD9C3" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient id="paint2_linear" x1="19.25" y1="11.8799" x2="19.25" y2="27.4199" gradientUnits="userSpaceOnUse">
                <stop offset="0.197115" stopColor="white"></stop>
                <stop offset="1" stopColor="#999999"></stop>
            </linearGradient>
        </defs>
    </svg>
);

export const PricingCard = ({
    title,
    price,
    frequency,
    description,
    features,
    buttonLabel,
    onButtonClick,
    className = ''
}: PricingCardProps) => {

    const iconListItems = features.map((feature, idx) => ({
        id: idx,
        icon: <CheckIcon />,
        text: feature
    }));

    return (
        <div className={['ds-pricing-card', className].join(' ')}>
            <Heading size="lg" className="ds-pricing-card-title">{title}</Heading>
            <div className="ds-pricing-card-price-container">
                <Heading size="2xl" className="ds-pricing-card-price">{price}</Heading>
                <Text size="lg" className="ds-pricing-card-frequency" color="primary">{frequency}</Text>
            </div>
            <Text size="md" color="secondary" className="ds-pricing-card-description">{description}</Text>

            <div className="ds-pricing-card-features">
                <IconList items={iconListItems} layout="vertical" />
            </div>

            <div className="ds-pricing-card-button-wrapper">
                <Button variant="dark" size="lg" label={buttonLabel} onClick={onButtonClick} className="ds-pricing-card-button" />
            </div>
        </div>
    );
};
