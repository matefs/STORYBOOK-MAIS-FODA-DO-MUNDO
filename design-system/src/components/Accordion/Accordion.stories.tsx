import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta = {
    title: 'Design System/Accordion',
    component: Accordion,
    
    tags: ['autodocs'],parameters: {
        layout: 'padded',
    },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: [
            {
                id: 1,
                title: 'O que é o Copy Pocket?',
                content: 'Copy Pocket é uma ferramenta capaz de gerar textos altamente persuasivos para diversas finalidades, baseada em inteligência artificial treinada com os melhores frameworks de copy.'
            },
            {
                id: 2,
                title: 'Como funciona a assinatura?',
                content: 'A assinatura é mensal e garante acesso a todas as funcionalidades, atualizações da inteligência artificial e suporte dedicado.'
            },
            {
                id: 3,
                title: 'Posso cancelar quando quiser?',
                content: 'Sim, você tem a liberdade de cancelar sua assinatura a qualquer momento sem nenhuma taxa adicional de cancelamento.'
            }
        ],
    },
};
