import type { Meta, StoryObj } from '@storybook/react';
import { CardPersonalizado } from './CardPersonalizado';
import React from 'react';

const meta = {
    title: 'Design System/CardPersonalizado',
    component: CardPersonalizado,
    
    tags: ['autodocs'],parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <div style={{ width: '600px', maxWidth: '100vw' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof CardPersonalizado>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <h2 style={{ color: '#fff', margin: 0, fontSize: '30px' }}>Exemplo de Título</h2>
                <p style={{ color: '#ccc', margin: 0, fontSize: '16px' }}>
                    Este é o conteúdo de teste para o CardPersonalizado. Background,
                    bordas arredondadas (20px) e padding (40px) com o layout exato fornecido pelas
                    propriedades calculadas!
                </p>
            </>
        ),
    },
};
