import React from 'react';
import d from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";



const DialogItem = (props: any) => {
    let path = "/dialogs/" + props.id;
    return (
        <>
            <div className={d.items}><img src="https://iconape.com/wp-content/png_logo_vector/react.png"
                                          alt=""/><NavLink to={path}> {props.name}</NavLink></div>
        </>);
}
const Message = (props: any) => {
    return (
        <div className={d.dialog}><img src="https://iconape.com/wp-content/png_logo_vector/react.png"
                                       alt=""/>{props.message}
        </div>
    );
}
const Dialogs = (props: any) => {

    let dialogData = [
        {name: "John", id: 1},
        {name: "Jerry", id: 2},
        {name: "Andrea", id: 3},
        {name: "Lois", id: 4},
        {name: "Anatoliy", id: 5},
    ]
    let messagesData = [
        {message: "Hello buddy", id: 1},
        {message: "Go to the stroll today?", id: 2},
        {message: "Do you learned something from React today ?", id: 3},
    ]

    return (
        <div className={d.dialogs}>
            <div className={d.users}><span>USERS:</span>
                <div className={d.item}>
                    {
                        dialogData.map((w, index, array) => {
                            return (
                                <DialogItem name={w.name} id={w.id}/>
                            );
                        })
                    }

                </div>
            </div>
            <div className={d.chats}><span>DIALOGS:</span>
                <div className={d.item}>
                    {
                        messagesData.map(w => {
                            return (
                                <Message message={w.message}/>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Dialogs;