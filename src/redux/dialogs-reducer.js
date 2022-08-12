import { v1 } from "uuid";

const UPDATE_NEW_MESSAGE_BODY ="UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE ="SEND-MESSAGE";

const dialogsReducer=(state, action)=>{
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY: 
            state.newMessageBody=action.body;
        return state;

        case SEND_MESSAGE : 
            let body = state.newMessageBody;
                state.newMessageBody="";
                state.messagesData.push({message:body, id:v1()});
        return state;
        default: return state;
             
    }
}
export default dialogsReducer