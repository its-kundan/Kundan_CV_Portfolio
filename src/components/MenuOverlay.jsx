import React, { forwardRef } from "react";
import NavLink from "./NavLink";

const MenuOverlay = forwardRef(({ links }, ref) => {
  return (
    <ul ref={ref} className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
});

MenuOverlay.displayName = 'MenuOverlay';

export default MenuOverlay;
