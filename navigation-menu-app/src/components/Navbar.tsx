// src/components/Navbar.tsx
import React from 'react';
import NavItem from './NavItem';
import './Navbar.css';
import { FaHome, FaInfoCircle, FaServicestack } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <ul className="nav-list">
        {/* 导航项 */}
        <NavItem label="/" pageName="Home" icon={<FaHome />} role="none" />
        <NavItem label="/about" pageName="About" icon={<FaInfoCircle />} role="none" />
        <NavItem label="/services" pageName="Services" icon={<FaServicestack />} role="none">
          <NavItem label="/services/design" pageName="Design" role="none">
            <NavItem label="/services/design/ui" pageName="UI Design" role="none" />
            <NavItem label="/services/design/ux" pageName="UX Design" role="none" />
          </NavItem>
          <NavItem label="/services/development" pageName="Development" role="none">
            <NavItem label="/services/development/frontend" pageName="Frontend" role="none" />
            <NavItem label="/services/development/backend" pageName="Backend" role="none" />
          </NavItem>
        </NavItem>
      </ul>
    </nav>
  );
};

export default Navbar;
