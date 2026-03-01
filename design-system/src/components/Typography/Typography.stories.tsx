import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Heading, Text } from './Typography';

const meta = {
    title: 'Design System/Typography',
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta;

export default meta;

export const Headings = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#fff' }}>
        <Heading size="3xl">Heading 3XL (85px)</Heading>
        <Heading size="2xl">Heading 2XL (70px)</Heading>
        <Heading size="xl">Heading XL (39px)</Heading>
        <Heading size="lg">Heading LG (23px)</Heading>
    </div>
);

export const Texts = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#fff', backgroundColor: '#000', padding: '1rem' }}>
        <Text size="lg" color="secondary">Text Large - Secondary Color</Text>
        <Text size="md" color="primary">Text Medium - Primary Color</Text>
        <Text size="sm">Text Small</Text>
        <Text size="xs">Text Extra Small</Text>
    </div>
);
