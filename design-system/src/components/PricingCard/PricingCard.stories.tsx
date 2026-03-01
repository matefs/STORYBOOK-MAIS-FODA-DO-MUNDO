import type { Meta, StoryObj } from '@storybook/react';
import { PricingCard } from './PricingCard';

const meta = {
    title: 'Design System/PricingCard',
    component: PricingCard,
    
    tags: ['autodocs'],parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof PricingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Plano Mensal',
        price: 'R$ 97,00',
        frequency: '/mês',
        description: 'Tudo que você precisa incluso:',
        features: [
            'Copys ilimitadas',
            'Base de conhecimento principal',
            'Histórico ilimitado',
            'Atualizações constantes'
        ],
        buttonLabel: 'Assinar plano mensal',
    },
};
