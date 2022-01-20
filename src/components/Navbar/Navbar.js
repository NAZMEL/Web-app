import React from "react";
import navbarStyle from './Navbar.module.css';


const Navbar = () =>{
    return(
        <nav className={navbarStyle.nav}>
        <div className={navbarStyle.item}>
          <a href="/profile">Profile</a>
        </div>
        <div className={navbarStyle.item}>
          <a href="/dialogs">Messages</a>
        </div>
        <div className={navbarStyle.item}>
          <a href="/news">News</a>
        </div>
        <div className={navbarStyle.item}>
          <a href="/music">Music</a>
        </div>
        <div className={navbarStyle.item}>
          <a href="/settings">Settings</a>
        </div>
      </nav>
    )
}

export default Navbar;