import type { Meta, StoryObj } from '@storybook/react';
import CardDetailComponent, {
    type CardDetailComponentProps,
} from './CardDetailComponent';

const meta: Meta<typeof CardDetailComponent> = {
    title: 'Design System/CardDetailComponent',
    component: CardDetailComponent,

    tags: ['autodocs'],} as const;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {} as CardDetailComponentProps,
};
