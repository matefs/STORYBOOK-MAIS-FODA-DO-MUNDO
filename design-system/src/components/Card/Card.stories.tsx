import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from './Card';
import { Heading, Text } from '../Typography/Typography';

const meta = {
    title: 'Design System/Card',
    component: Card,
    
    tags: ['autodocs'],parameters: {
        layout: 'padded',
    },
    args: {
        interactive: true,
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <Card {...args} style={{ maxWidth: '400px' }}>
            <Heading size="lg" style={{ marginBottom: '10px' }}>
                Funcionalidade
            </Heading>
            <Text size="md" color="secondary">
                Treinado em livros de copy
            </Text>
        </Card>
    ),
};
