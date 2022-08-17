import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs';


const DialogsContainer = (props: any) => {

    let state = props.store.getState().messagesPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (body: any) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    return (
        <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            messagesPage={state}
        />
    );
};

export default DialogsContainer;