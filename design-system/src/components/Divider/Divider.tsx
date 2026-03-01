import React from 'react';
import './Divider.css';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
    className?: string;
}

export const Divider = ({ className = '', ...props }: DividerProps) => {
    return <hr className={['ds-divider', className].join(' ')} {...props} />;
};
