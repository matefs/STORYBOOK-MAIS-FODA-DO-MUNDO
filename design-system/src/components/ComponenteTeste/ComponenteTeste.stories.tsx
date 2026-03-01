import type { Meta, StoryObj } from '@storybook/react';
import ComponenteTeste, { type ComponenteTesteProps } from './ComponenteTeste';

const meta: Meta<typeof ComponenteTeste> = {
    title: 'Components/ComponenteTeste',
    component: ComponenteTeste,
    
    tags: ['autodocs'],// You can set default args here if desired
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
};
