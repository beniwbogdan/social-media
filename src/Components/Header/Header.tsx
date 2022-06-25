import React from 'react';
import h from "./Header.module.css";
// const h={
//     "header":'Header_header__ZE\+O1',
//     "App-logo":"Header_App-logo__YnPVu"
// }
const Header = () => {
    return (
        <header className={h.header}>
            <img className={h["App-logo"]} src="https://iconape.com/wp-content/png_logo_vector/react.png" alt=""/>
        </header>

    );
};

export default Header;