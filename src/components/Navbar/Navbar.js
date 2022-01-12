import React from "react";
import navbarStyle from './Navbar.module.css';


const Navbar = () =>{
    return(
        <nav className={navbarStyle.nav}>
        <div className={navbarStyle.item}>
          <a href="">Profile</a>
        </div>
        <div className={navbarStyle.item}>
          <a href="">Messages</a>
        </div>
        <div className={navbarStyle.item}>
          <a href="">News</a>
        </div>
        <div className={navbarStyle.item}>
          <a href="">Music</a>
        </div>
        <div className={navbarStyle.item}>
          <a href="">Settings</a>
        </div>
      </nav>
    )
}

export default Navbar;