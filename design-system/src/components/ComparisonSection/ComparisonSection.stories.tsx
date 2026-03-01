import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ComparisonSection from './ComparisonSection';

const meta = {
  title: 'Design System/ComparisonSection',
  component: ComparisonSection,
  
    tags: ['autodocs'],parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof ComparisonSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ComparisonSection />, 
};
