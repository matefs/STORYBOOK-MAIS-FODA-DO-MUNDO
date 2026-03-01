import React, { useState } from 'react';
import './Accordion.css';
import { Text } from '../Typography/Typography';

export interface AccordionItem {
    id: string | number;
    title: string;
    content: string;
}

export interface AccordionProps {
    items: AccordionItem[];
    className?: string;
}

export const Accordion = ({ items, className = '' }: AccordionProps) => {
    const [openId, setOpenId] = useState<string | number | null>(null);

    const toggleItem = (id: string | number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className={['ds-accordion', className].join(' ')}>
            {items.map((item) => {
                const isOpen = openId === item.id;
                return (
                    <div key={item.id} className={['ds-accordion-item', isOpen ? 'ds-accordion-item--open' : ''].join(' ')}>
                        <button className="ds-accordion-header" onClick={() => toggleItem(item.id)}>
                            <span className="ds-accordion-title">{item.title}</span>
                            <span className="ds-accordion-icon">{isOpen ? '-' : '+'}</span>
                        </button>
                        <div className="ds-accordion-content" style={{ maxHeight: isOpen ? '500px' : '0' }}>
                            <div className="ds-accordion-content-inner">
                                <Text size="md" color="secondary">{item.content}</Text>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
