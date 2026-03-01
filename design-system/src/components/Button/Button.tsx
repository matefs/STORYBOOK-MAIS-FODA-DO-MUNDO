import React from 'react';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'dark' | 'white';
  size?: 'sm' | 'md' | 'lg';
  label: string;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  label,
  className = '',
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={['ds-button', `ds-button--${variant}`, `ds-button--${size}`, className].join(' ')}
      {...props}
    >
      <span className="ds-button-content">{label}</span>
    </button>
  );
};
