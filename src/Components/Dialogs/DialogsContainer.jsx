import { connect } from 'react-redux';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => { dispatch(sendMessageCreator()) },
        updateNewMessageBody: (body) => { dispatch(updateNewMessageBodyCreator(body)) }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;