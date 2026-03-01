import React from 'react';
import './IconList.css';
import { Text } from '../Typography/Typography';

export interface IconListProps {
    items: {
        id: string | number;
        icon: React.ReactNode;
        text: string;
    }[];
    layout?: 'vertical' | 'horizontal';
    className?: string;
}

export const IconList = ({ items, layout = 'vertical', className = '' }: IconListProps) => {
    return (
        <ul className={['ds-icon-list', `ds-icon-list--${layout}`, className].join(' ')}>
            {items.map((item) => (
                <li key={item.id} className="ds-icon-list-item">
                    <span className="ds-icon-list-icon">{item.icon}</span>
                    <Text size="md" color="primary">{item.text}</Text>
                </li>
            ))}
        </ul>
    );
};
