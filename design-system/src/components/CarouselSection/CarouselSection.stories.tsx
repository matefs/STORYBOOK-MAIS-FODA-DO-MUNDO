import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CarouselSection } from './CarouselSection';

const meta = {
    title: 'Design System/CarouselSection',
    component: CarouselSection,
    
    tags: ['autodocs'],parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof CarouselSection>;

export default meta;
type Story = StoryObj<typeof meta>;

// Usando imagens placeholder com proporção vertical (9:16)
const placeholderImages = [
    <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=400&h=700&auto=format&fit=crop" alt="Perfil 1" loading="lazy" />,
    <img src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=400&h=700&auto=format&fit=crop" alt="Perfil 2" loading="lazy" />,
    <img src="https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=400&h=700&auto=format&fit=crop" alt="Perfil 3" loading="lazy" />,
    <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=400&h=700&auto=format&fit=crop" alt="Perfil 4" loading="lazy" />,
    <img src="https://images.unsplash.com/photo-1611162618071-b39a2d21a711?q=80&w=400&h=700&auto=format&fit=crop" alt="Perfil 5" loading="lazy" />,
];

export const Default: Story = {
    args: {
        title: 'Produtores de conteúdo que utilizam nosso storytelling para engajar:',
        items: placeholderImages,
    },
};
