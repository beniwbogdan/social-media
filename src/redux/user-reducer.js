import { v1 } from "uuid";

const ADD_POST ="ADD-POST";
const UPDATE_NEW_POST_TEXT="UPDATE-NEW-POST-TEXT";

let initialState ={
    users: [
        {id: v1(),followed:true, fullName:"Name S.", status:"Who i am", location:{city:"Krakow", country:"Polska"}},
        {id: v1(),followed:true, fullName:"Name S.", status:"Work hard", location:{city:"Warshaw", country:"Polska"}},
        {id: v1(),followed:false, fullName:"Name S.", status:"Procrastination is not about me", location:{city:"Wroclaw", country:"Polska"}},
        {id: v1(),followed:true, fullName:"Name S.", status:"Looking for job", location:{city:"Wieliczka", country:"Polska"}},
    ],newPostText:"FLUX data"
}
 const userReducer=(state=initialState, action)=>{

    switch(action.type){
        
        default: return state;
    }
}

export const addPostsActionCreator = () => ({
    type: ADD_POST,

})
export const onPostChangeActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text

})


export default userReducer