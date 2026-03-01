import type { Meta } from '@storybook/react';
import React from 'react';

const meta = {
    title: 'Design System/Colors',
    tags: ['autodocs'],
} satisfies Meta;

export default meta;

export const Palette = () => {
    const colors = [
        { name: 'Primary (White)', varName: 'var(--color-primary)', hex: '#FFFFFF' },
        { name: 'Secondary (Gray)', varName: 'var(--color-secondary)', hex: '#959595' },
        { name: 'Background App (Black)', varName: 'var(--color-background-app)', hex: '#000000' },
        { name: 'Card Background', varName: 'var(--color-background-card)', hex: '#0F0F0F' },
        { name: 'Card Background Hover', varName: 'var(--color-background-card-hover)', hex: '#181818' },
        { name: 'Border', varName: 'var(--color-border)', hex: '#FFFFFF20' },
        { name: 'Orange Accent', varName: 'var(--color-accent-orange)', hex: '#F16517' },
        { name: 'Green Accent Gradient Start', varName: 'var(--color-accent-light-green)', hex: '#A5FFB5' },
        { name: 'Green Accent Gradient End', varName: 'var(--color-accent-green)', hex: '#2D6330' },
        { name: 'Dark Button', varName: 'var(--color-button-dark)', hex: '#424242' },
    ];

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', padding: '20px', backgroundColor: '#000', color: '#fff' }}>
            {colors.map((color) => (
                <div key={color.name} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{
                        height: '100px',
                        width: '100%',
                        backgroundColor: color.varName,
                        border: '1px solid #FFFFFF20',
                        borderRadius: '10px'
                    }} />
                    <div style={{ fontSize: '14px', fontFamily: 'Helvetica' }}>
                        <strong>{color.name}</strong>
                        <p style={{ margin: '5px 0 0 0', color: '#959595' }}>{color.hex}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
