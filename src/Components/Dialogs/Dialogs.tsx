import React from 'react';
import d from "./Dialogs.module.css"
const Dialogs = (props:any) => {
    return (
        <div className={d.dialogs}>
            <div className={d.users}>USERS</div>
            <div className={d.chats}>DIALOGS</div>
        </div>
    );
};

export default Dialogs;