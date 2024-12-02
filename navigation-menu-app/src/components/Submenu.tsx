import React, { ReactNode } from "react";

interface SubmenuProps {
  children: ReactNode;
  className?: string;
}

const Submenu: React.FC<SubmenuProps> = ({ children, className }) => {
  return (
    <ul className={`submenu ${className || ""}`} role="menu">
      {React.Children.map(children, (child, index) => (
        <li key={index} role="menuitem">
          {child}
        </li>
      ))}
    </ul>
  );
};

export default Submenu;
