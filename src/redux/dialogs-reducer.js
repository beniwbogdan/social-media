import { v1 } from "uuid";

const UPDATE_NEW_MESSAGE_BODY ="UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE ="SEND-MESSAGE";

let initialState ={
    dialogData: [
        {name: "John", id: v1()},
        {name: "Jerry", id: v1()},
        {name: "Andrea", id: v1()},
        {name: "Lois", id: v1()},
        {name: "Anatoliy", id: v1()},],
    messagesData: [
        {message: "Hello buddy", id: v1()},
        {message: "Go to the stroll today?", id: v1()},
        {message: "Do you learned something from React today ?", id: v1()},
    ]
}

const dialogsReducer=(state = initialState, action)=>{
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY: 
        //   state.newMessageBody=action.body;
            const newState = {...state,newMessageBody:action.body}
        return newState;
        case SEND_MESSAGE : 
        //   state.newMessageBody=action.body;
        let body = state.newMessageBody;

        let newAddPost={
            message:body, 
            id:v1()
        } 
          const newStateDialog = {...state, messagesData:[...state.messagesData,newAddPost],newMessageBody:""}
        return newStateDialog;

        //    state.newMessageBody="";
         //   state.messagesData.push(newAddPost);
    // return state
        default: return state;   
    }
}

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body:body,

})
export const sendMessageCreator = () => ({
    type: SEND_MESSAGE,
   
})

export default dialogsReducer