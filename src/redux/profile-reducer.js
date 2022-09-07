import { v1 } from "uuid";
import { usersAPI,profileAPI } from "../api/api";
const ADD_POST ="ADD-POST";
const UPDATE_NEW_POST_TEXT="UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE="SET_USER_PROFILE";
const SET_STATUS="SET_STATUS";
const UPDATE_STATUS="UPDATE_STATUS";
//const GET_USER_PROFILE = "GET_USER_PROFILE";

let initialState ={
    postData: [
        {message: "Hello, this is my 1 post through the props", id: v1(), likesCount: 23},
        {message: "Hello, this is my 2message post through the props", id: v1(), likesCount: 25},
        {message: "Hello, this is my 3 post through the props", id: v1(), likesCount: 27},
    ],
    newPostText:"FLUX data",
    profile:null,
    status:"",
}
 const profileReducer=(state=initialState, action)=>{

    switch(action.type){
        case ADD_POST: 
            let newPost = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            }
            //state.postData.push(newPost);
            //state.newPostText="";
            const newState = {...state, postData:[...state.postData,newPost], newPostText:""};
            return newState;

        case UPDATE_NEW_POST_TEXT: 
            return{...state, newPostText:action.newText}
        case SET_USER_PROFILE:
            return{...state, profile:action.profile}
        case SET_STATUS:
            return{...state, status:action.status}
        case UPDATE_STATUS:
            return{...state, status:action.status}
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
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile

})
export const setStatus = (status) => ({
    type: SET_STATUS,
    status

})
export const updateStatus = (status) => ({
    type: UPDATE_STATUS,
    status

})
// export const getUserProfile = (userId) => ({
//     type: GET_USER_PROFILE,
//     userId

// })

export const getUserProfile=(userID)=>{
    return (dispatch)=>{
        usersAPI.getProfile(userID)
            .then(response => {
                dispatch(setUserProfile(response));
            })
    }

}
export const getStatus=(status)=>{
    return (dispatch)=>{
        profileAPI.getStatus(status)
            .then(response => {
                
                dispatch(setStatus(response));
            })
    }

}
export const updateUserStatus=(status)=>{
    return (dispatch)=>{
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.resultCode===0)
                dispatch(setStatus(status));
            })
    }

}




export default profileReducer