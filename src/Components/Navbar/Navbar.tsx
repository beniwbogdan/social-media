import React from 'react';
import "./Navbar.module.css";
const n = {
    "nav":"Navbar_nav__rfPBT",
    "item":"Navbar_item__68eYL"
}
const Navbar = () => {
    return (

        <nav className={n.nav}>
            <div className={n.item}><a href="#s">Profile</a></div>
            <div className={n.item}><a href="#s">Messages</a></div>
            <div className={n.item}><a href="#s">News</a></div>
            <div className={n.item}><a href="#s">Music</a></div>
            <div className={n.item}><a href="#s">Settings</a></div>
        </nav>

    );
};

export default Navbar;