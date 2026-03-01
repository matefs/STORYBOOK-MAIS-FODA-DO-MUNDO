import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta = {
    title: 'Design System/Divider',
    component: Divider,
    
    tags: ['autodocs'],parameters: {
        layout: 'padded',
    },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div style={{ width: '100%', maxWidth: '300px', backgroundColor: '#000', padding: '20px' }}>
            <div style={{ color: '#fff' }}>Above the divider</div>
            <Divider />
            <div style={{ color: '#fff' }}>Below the divider</div>
        </div>
    )
};
