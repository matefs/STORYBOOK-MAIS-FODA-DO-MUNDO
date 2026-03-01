import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { HowItWorks } from './HowItWorks';

const meta = {
    title: 'Design System/HowItWorks',
    component: HowItWorks,
    
    tags: ['autodocs'],parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof HowItWorks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Como funciona',
        steps: [
            {
                id: '1',
                title: 'Escolha o tipo de copy',
                description: 'Selecione entre stories, storytelling, legenda, criativo ou landing page.',
                imageNode: <img src="https://cdn-icons-png.freepik.com/512/9633/9633630.png" alt="Passo 1" style={{ padding: '80px', backgroundColor: '#111' }} />
            },
            {
                id: '2',
                title: 'Descreva seu produto/serviço',
                description: 'Escreva brevemente sobre o que é seu produto, serviço ou Saas.',
                imageNode: <img src="https://cdn-icons-png.freepik.com/512/9633/9633630.png" alt="Passo 2" style={{ padding: '80px', backgroundColor: '#222' }} />
            },
            {
                id: '3',
                title: 'Copy profissional instantânea',
                description: 'Edite, refine e publique com técnicas profissionais.',
                imageNode: <img src="https://cdn-icons-png.freepik.com/512/9633/9633630.png" alt="Passo 3" style={{ padding: '80px', backgroundColor: '#333' }} />
            }
        ],
    },
};
