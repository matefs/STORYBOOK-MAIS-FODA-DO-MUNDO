import React from 'react';
import './CardPersonalizado.css';

export interface CardPersonalizadoProps {
    children?: React.ReactNode;
    className?: string;
}

export const CardPersonalizado = ({ children, className = '' }: CardPersonalizadoProps) => {
    return (
        <div className={['ds-card-personalizado', className].join(' ')}>
            {children}
        </div>
    );
};
