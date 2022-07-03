import React from 'react';
import d from "./Dialogs.module.css"

const Dialogs = (props: any) => {
    return (
        <div className={d.dialogs}>
            <div className={d.users}><span>USERS:</span>
                <div className={d.item}>
                    <div className={d.items}>John</div>
                    <div className={d.items}>Jerry</div>
                    <div className={d.items}>Andrea</div>
                    <div className={d.items}>Lois</div>
                    <div className={d.items}>Anatoliy</div>
                </div>
            </div>
            <div className={d.chats}><span>DIALOGS:</span>
                <div className={d.item}>
                    <div className={d.chat}><img src="https://iconape.com/wp-content/png_logo_vector/react.png" alt=""/>Hello buddy</div>
                    <div className={d.chat}><img src="https://iconape.com/wp-content/png_logo_vector/react.png" alt=""/>Go to the stroll today? </div>
                    <div className={d.chat}><img src="https://iconape.com/wp-content/png_logo_vector/react.png" alt=""/>Do you learned something from React today ?</div>

                </div>
            </div>
        </div>
    );
};

export default Dialogs;