import React from 'react';
import d from "./Dialogs.module.css"
//import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/state'


const Dialogs = (props: any) => {

    let state = props.store.getState().messagesPage;

    let dialogsElements = state.dialogData.map((w: any) => {
        return (
            <DialogItem name={w.name} id={w.id} />
        );
    })
    let messagesElements = state.messagesData.map((w: any) => {
        return (
            <Message message={w.message} />
        );
    })
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e: any) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    return (
        <div className={d.dialogs}>
            <div className={d.users}><span>USERS:</span>
                <div className={d.item}>
                    {
                        dialogsElements
                    }

                </div>
            </div>
            <div className={d.chats}><span>DIALOGS:</span>
                <div className={d.item}>
                    {
                        messagesElements
                    }
                </div>
                <div>
                    <div><textarea
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder={"Enter message"}></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;