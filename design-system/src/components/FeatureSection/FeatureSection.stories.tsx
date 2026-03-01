import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FeatureSection } from './FeatureSection';

const meta = {
    title: 'Design System/FeatureSection',
    component: FeatureSection,
    
    tags: ['autodocs'],parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof FeatureSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'PORQUE FUNCIONA',
        title: 'Copywriting com engenharia de conversão',
        description: 'O copy.pocket não foca em escrever bonito. Ele aplica estruturas clássicas de copywriting, gatilhos mentais no momento certo e um fluxo de persuasão pensado do início ao CTA: tudo orientado para performance e conversão, não para enfeite.',
        imageNode: <img src="https://cdn-icons-png.freepik.com/512/9633/9633630.png" alt="Example" style={{ padding: '40px', background: '#1c1c1c' }} />,
    },
};
