import React from 'react';
import n from "./Navbar.module.css";
// const n = {
//     "nav":"Navbar_nav__rfPBT",
//     "item":"Navbar_item__68eYL",
//     "active":"Navbar_active__gZRKD"
// }
const Navbar = () => {
    return (

        <nav className={n.nav}>
            <div className={n.item}><a href="profile">Profile</a></div>
            <div className={`${n.item} ${n.active}`}><a href="dialogs">Messages</a></div>
            <div className={n.item}><a href="#s">News</a></div>
            <div className={n.item}><a href="#s">Music</a></div>
            <div className={n.item}><a href="#s">Settings</a></div>
        </nav>

    );
};

export default Navbar;