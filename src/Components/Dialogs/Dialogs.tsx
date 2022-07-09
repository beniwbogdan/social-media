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

    return (
        <div className={d.dialogs}>
            <div className={d.users}><span>USERS:</span>
                <div className={d.item}>
                    <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
                    <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
                    <DialogItem name={dialogData[2].name} id={dialogData[2].id}/>
                    <DialogItem name={"Lois"} id={4}/>
                    <DialogItem name={"Anatoliy"} id={5}/>

                </div>
            </div>
            <div className={d.chats}><span>DIALOGS:</span>
                <div className={d.item}>
                    <Message message={"Hello buddy"}/>
                    <Message message={"Go to the stroll today?"}/>
                    <Message message={"Do you learned something from React today ?"}/>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;