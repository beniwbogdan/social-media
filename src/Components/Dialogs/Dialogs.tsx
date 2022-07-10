import React from 'react';
import d from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props: any) => {
    return (
        <div className={d.dialogs}>
            <div className={d.users}><span>USERS:</span>
                <div className={d.item}>
                    {
                        props.appState.dialogData.map((w:any) => {
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
                        props.appState.messagesData.map((w:any) => {
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