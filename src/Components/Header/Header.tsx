import React from 'react';
import { NavLink } from 'react-router-dom';
import h from "./Header.module.css";

const Header = () => {
    return (
        <header className={h.header}>
            <div className={h.loginBlock}>
                <NavLink to={"/login"}>Login</NavLink>
            </div>
            <div className={h.eyePosition}>


                <img className={h["App-logo"]}
                    src="https://cdn.pixabay.com/photo/2021/02/25/14/12/rinnegan-6049194_640.png" alt="" />

            </div>

        </header>

    );
};

export default Header;