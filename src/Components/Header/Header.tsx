import React from 'react';
import h from "./Header.module.css";
// const h={
//     "header":'Header_header__ZE\+O1',
//     "App-logo":"Header_App-logo__YnPVu"
// }
const Header = () => {
    return (
        <header className={h.header}>
            <div>
                <img className={h["App-logo"]}
                     src="https://cdn.pixabay.com/photo/2021/02/25/14/12/rinnegan-6049194_640.png" alt=""/>
            </div>
            </header>

    );
};

export default Header;