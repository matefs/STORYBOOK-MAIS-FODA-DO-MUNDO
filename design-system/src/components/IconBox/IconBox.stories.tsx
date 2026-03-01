import type { Meta, StoryObj } from '@storybook/react';
import { IconBox } from './IconBox';

const meta = {
    title: 'Design System/IconBox',
    component: IconBox,
    
    tags: ['autodocs'],parameters: {
        layout: 'padded',
    },
} satisfies Meta<typeof IconBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        // using placeholder if the relative path breaks or user doesn't have it served
        iconUrl: 'https://cdn-icons-png.freepik.com/512/9633/9633630.png',
        // It's better to use a placeholder image for storybook but we know the actual image might look like this
        title: 'Escolha o tipo de copy',
        description: 'Selecione entre stories, storytelling, legenda, criativo ou landing page.',
        style: { maxWidth: '500px' }
    },
};
