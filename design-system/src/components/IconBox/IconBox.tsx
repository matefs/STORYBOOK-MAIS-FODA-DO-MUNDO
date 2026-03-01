import React from 'react';
import './IconBox.css';
import { Heading, Text } from '../Typography/Typography';

export interface IconBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    iconUrl: string;
    title: string;
    description: string;
}

export const IconBox = ({ iconUrl, title, description, className = '', ...props }: IconBoxProps) => {
    return (
        <div className={['ds-iconbox', className].join(' ')} {...props}>
            <picture className="ds-iconbox-img-wrapper">
                <img src={iconUrl} alt={title} className="ds-iconbox-img" />
            </picture>
            <div className="ds-iconbox-content">
                <Heading size="lg" className="ds-iconbox-title">
                    {title}
                </Heading>
                <Text size="md" className="ds-iconbox-description">
                    {description}
                </Text>
            </div>
        </div>
    );
};
