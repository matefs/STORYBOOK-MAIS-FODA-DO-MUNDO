import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta = {
    title: 'Design System/Header',
    component: Header,
    
    tags: ['autodocs'],parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        links: [
            { label: 'Quem somos', href: '#' },
            { label: 'O que fazemos', href: '#' },
            { label: 'Preços', href: '#' },
            { label: 'FAQ', href: '#' }
        ],
    },
};
