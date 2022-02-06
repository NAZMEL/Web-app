import React from "react";
import { NavLink } from "react-router-dom";
import navbarStyle from './Navbar.module.css';


const Navbar = () =>{
    return(
        <nav className={navbarStyle.nav}>
        <div className={navbarStyle.item}>
          <NavLink to="/profile" className={
            navData => navData.isActive ? navbarStyle.active : navbarStyle.item
          } >Profile</NavLink>
        </div>
        <div className={navbarStyle.item}>
          <NavLink to="/users" className={
            navData => navData.isActive ? navbarStyle.active : navbarStyle.item
          } >Users</NavLink>
        </div>
        <div className={navbarStyle.item}>
          <NavLink to="/dialogs" className={
            navData => navData.isActive ? navbarStyle.active : navbarStyle.item
          }>Messages</NavLink>
        </div>
        <div className={navbarStyle.item}>
          <NavLink to="/news" className={
            navData => navData.isActive ? navbarStyle.active : navbarStyle.item
          }>News</NavLink>
        </div>
        <div className={navbarStyle.item}>
          <NavLink to="/music" className={
            navData => navData.isActive ? navbarStyle.active : navbarStyle.item
          }>Music</NavLink>
        </div>
        <div className={navbarStyle.item}>
          <NavLink to="/settings"  className={
            navData => navData.isActive ? navbarStyle.active : navbarStyle.item
          } >Settings</NavLink>
        </div>
      </nav>
    )
}

export default Navbar;