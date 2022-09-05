import React from 'react';
import d from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { v1 } from 'uuid';
import { Navigate } from 'react-router-dom';


const Dialogs = (props: any) => {
    let state = props.messagesPage;
    let dialogsElements = state.dialogData.map((w: any) => {
        return (
            <DialogItem key={v1()} name={w.name} id={w.id} />
        );
    })
    let messagesElements = state.messagesData.map((w: any) => {
        return (
            <Message key={v1()} message={w.message} />
        );
    })
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e: any) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);

    }
    if (props.isAuth === false) return <Navigate to={"/login"} />;

    return (
        <>
            {/* {props.isAuth ? <Dialogs /> : <Login />} */}
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
        </>

    );
};

export default Dialogs;