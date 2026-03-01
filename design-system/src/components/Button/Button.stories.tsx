import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
    title: 'Design System/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'outline', 'dark'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        label: 'Começar agora',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        size: 'md',
        label: 'Entrar',
    },
};

export const Dark: Story = {
    args: {
        variant: 'dark',
        size: 'lg',
        label: 'Assinar plano mensal',
    },
};

export const Small: Story = {
    args: {
        variant: 'primary',
        size: 'sm',
        label: 'Pequeno',
    },
};

export const Large: Story = {
    args: {
        variant: 'primary',
        size: 'lg',
        label: 'Grande',
    },
};
