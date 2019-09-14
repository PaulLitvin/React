import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <ul>
        <NavLink to="/profile">
          <li>Profile</li>
        </NavLink>
        <NavLink to="/dialogs">
          <li>Dialogs</li>
        </NavLink>

        <li>AAAAA</li>
        <li>BBBB</li>
        <li>CCCCC</li>
      </ul>
    </div>
  );
};


export default Navbar;