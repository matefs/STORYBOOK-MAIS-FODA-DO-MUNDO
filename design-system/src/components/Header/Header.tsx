import React from 'react';
import './Header.css';
import { Button } from '../Button/Button';

export interface HeaderProps {
    logoUrl?: string;
    links: { label: string; href: string }[];
    onLoginClick?: () => void;
    className?: string;
}

export const Header = ({ logoUrl, links, onLoginClick, className = '' }: HeaderProps) => {
    return (
        <header className={['ds-header', className].join(' ')}>
            <div className="ds-header-container">
                <div className="ds-header-logo">
                    {logoUrl ? <img src={logoUrl} alt="Logo" /> : <span className="ds-header-logo-text">COPYPOCKET</span>}
                </div>
                <nav className="ds-header-nav">
                    <ul className="ds-header-nav-list">
                        {links.map((link, idx) => (
                            <li key={idx} className="ds-header-nav-item">
                                <a href={link.href} className="ds-header-nav-link">{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="ds-header-actions">
                    <Button variant="outline" size="sm" label="Entrar" onClick={onLoginClick} />
                </div>
            </div>
        </header>
    );
};
