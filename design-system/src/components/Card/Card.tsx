import React from 'react';
import './Card.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    interactive?: boolean;
}

export const Card = ({ children, interactive = false, className = '', ...props }: CardProps) => {
    return (
        <div
            className={['ds-card', interactive ? 'ds-card--interactive' : '', className].join(' ')}
            {...props}
        >
            {children}
        </div>
    );
};
