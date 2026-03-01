import React from 'react';
import './Typography.css';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    size?: 'md' | 'lg' | 'xl' | '2xl' | '3xl';
    children: React.ReactNode;
}

export const Heading = ({
    level = 2,
    size = '2xl',
    children,
    className = '',
    ...props
}: HeadingProps) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    return (
        <Tag className={['ds-heading', `ds-text-${size}`, className].join(' ')} {...props}>
            {children}
        </Tag>
    );
};

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    size?: 'xs' | 'sm' | 'md' | 'lg';
    color?: 'primary' | 'secondary';
    children: React.ReactNode;
}

export const Text = ({
    size = 'md',
    color = 'secondary',
    children,
    className = '',
    ...props
}: TextProps) => {
    return (
        <p className={['ds-text', `ds-text-${size}`, `ds-color-${color}`, className].join(' ')} {...props}>
            {children}
        </p>
    );
};
