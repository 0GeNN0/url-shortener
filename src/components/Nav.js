import React from "react";

const Navbar = (props) => {
  const desktopClass = props.screen ? `nav-links-${props.screen}` : '';

  return (
    <nav>
      <menu className={`nav-links ${desktopClass}`}>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </menu>
    </nav>
  );
};

export default Navbar;