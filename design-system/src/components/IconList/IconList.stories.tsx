import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { IconList } from './IconList';

const meta = {
    title: 'Design System/IconList',
    component: IconList,
    
    tags: ['autodocs'],parameters: {
        layout: 'padded',
    },
} satisfies Meta<typeof IconList>;

export default meta;
type Story = StoryObj<typeof meta>;

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

export const Vertical: Story = {
    args: {
        layout: 'vertical',
        items: [
            { id: 1, icon: <CheckIcon />, text: 'Copys ilimitadas' },
            { id: 2, icon: <CheckIcon />, text: 'Base de conhecimento principal' },
            { id: 3, icon: <CheckIcon />, text: 'Histórico ilimitado' },
        ],
    },
};

export const Horizontal: Story = {
    args: {
        layout: 'horizontal',
        items: [
            { id: 1, icon: <CheckIcon />, text: 'Social media' },
            { id: 2, icon: <CheckIcon />, text: 'Gestores de tráfego' },
            { id: 3, icon: <CheckIcon />, text: 'Infoprodutores' },
        ],
    },
};
