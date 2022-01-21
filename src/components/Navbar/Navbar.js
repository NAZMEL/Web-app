import React from "react";
import { NavLink } from "react-router-dom";
import navbarStyle from './Navbar.module.css';


const Navbar = () =>{
    return(
        <nav className={navbarStyle.nav}>
        <div className={navbarStyle.item}>
          <NavLink to="/profile">Profile</NavLink>
        </div>
        <div className={navbarStyle.item}>
          <NavLink to="/dialogs">Messages</NavLink>
        </div>
        <div className={navbarStyle.item}>
          <NavLink to="/news">News</NavLink>
        </div>
        <div className={navbarStyle.item}>
          <NavLink to="/music">Music</NavLink>
        </div>
        <div className={navbarStyle.item}>
          <NavLink to="/settings">Settings</NavLink>
        </div>
      </nav>
    )
}

export default Navbar;