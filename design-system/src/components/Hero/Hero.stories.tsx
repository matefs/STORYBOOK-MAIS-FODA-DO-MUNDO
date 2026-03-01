import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Hero } from './Hero';

const meta = {
    title: 'Design System/Hero',
    component: Hero,
    
    tags: ['autodocs'],parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: (
            <>
                Escreva em segundos copys que convertem <strong>10x mais</strong> para <span style={{ color: '#F16517' }}>páginas</span>
            </>
        ),
        subtitle: 'Crie páginas de vendas, criativos e storytelling sem travar, sem improvisar e sem depender de copywriter externo.',
        buttonLabel: 'Começar agora',
    },
};
