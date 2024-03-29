import React from 'react';
import n from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = (props: any) => {
    return (

        <nav className={n.nav}>
            <div className={n.item}><NavLink className={n.active} to="profile">Profile</NavLink></div>
            <div className={`${n.item} ${n.active}`}><NavLink className={n.active} to="dialogs">Messages</NavLink></div>
            <div className={n.item}><NavLink to="#s">News</NavLink></div>
            <div className={n.item}><NavLink to="#s">Music</NavLink></div>
            <div className={n.item}><NavLink to="#s">Settings</NavLink></div>
            <div className={n.item}><NavLink className={n.active} to="users">Users</NavLink></div>
        </nav>

    );
}

export default Navbar;