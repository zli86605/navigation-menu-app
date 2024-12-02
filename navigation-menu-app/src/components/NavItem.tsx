// src/components/NavItem.tsx
import React, { useState, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface NavItemProps {
  label: string;
  pageName: string;
  icon?: ReactNode;
  children?: ReactNode;
  role?: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, pageName, icon, children, role }) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasChildren = !!children;

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li
      className="nav-item"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
      role={role}
    >
      <Link
        to={label}
        aria-haspopup={hasChildren ? 'true' : undefined}
        aria-expanded={hasChildren ? isOpen : undefined}
        onClick={hasChildren ? (e) => { e.preventDefault(); toggleSubMenu(); } : undefined}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            hasChildren && toggleSubMenu();
          }
        }}
      >
        {icon} {pageName}
      </Link>
      {hasChildren && (
        <ul className={`submenu ${isOpen ? 'open' : ''}`} role="menu">
          {React.Children.map(children, (child) =>
            React.cloneElement(child as React.ReactElement<any>, { role: 'menuitem' })
          )}
        </ul>
      )}
    </li>
  );
};

export default NavItem;
