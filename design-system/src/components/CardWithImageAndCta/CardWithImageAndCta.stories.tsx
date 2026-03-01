import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CardWithImageAndCta } from './CardWithImageAndCta';

const meta = {
    title: 'Components/CardWithImageAndCta',
    component: CardWithImageAndCta,
    parameters: {
        layout: 'padded',
        backgrounds: {
            default: 'dark',
            values: [
                { name: 'dark', value: '#000000' }
            ]
        }
    },
    tags: ['autodocs'],
    argTypes: {
        imagePosition: {
            control: 'radio',
            options: ['left', 'right'],
        },
    },
} satisfies Meta<typeof CardWithImageAndCta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        overline: 'TESTE AGORA',
        title: 'Pare de perder vendas por causa de copy fraca.',
        description: 'Comece hoje e veja suas conversões aumentarem usando técnicas dos maiores copywriters da história.',
        buttonText: 'Começar agora',
        imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
        imagePosition: 'right',
    },
};

export const ImageLeft: Story = {
    args: {
        overline: 'TESTE AGORA',
        title: 'Pare de perder vendas por causa de copy fraca.',
        description: 'Comece hoje e veja suas conversões aumentarem usando técnicas dos maiores copywriters da história.',
        buttonText: 'Começar agora',
        imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
        imagePosition: 'left',
    },
};
