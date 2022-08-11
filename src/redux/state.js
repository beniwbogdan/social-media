import {v1} from "uuid";

let ADD_POST ="ADD-POST";
let UPDATE_NEW_POST_TEXT="UPDATE-NEW-POST-TEXT";

let store = {
     _state : {
        profilePage: {
            postData: [
                {message: "Hello, this is my 1 post through the props", id: v1(), likesCount: 23},
                {message: "Hello, this is my 2message post through the props", id: v1(), likesCount: 25},
                {message: "Hello, this is my 3 post through the props", id: v1(), likesCount: 27},
            ],newPostText:"FLUX data"
        },
        messagesPage: {
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
    },
    _callSubscriber(){

    },
    getState(){
        return this._state
    },
    // addPost (){
    //     let newPost = {
    //         id: v1(),
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     }
        
    //     this._state.profilePage.postData.push(newPost);
    //     this._state.profilePage.newPostText="";
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText){
    //     this._state.profilePage.newPostText=newText;
    //     this._callSubscriber(this._state);
    // },
    subscribe(observer){
    this._callSubscriber=observer;
    },
    dispatch(action){
        if(action.type==='ADD-POST'){
            let newPost = {
                id: v1(),
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText="";
            this._callSubscriber(this._state);

        }else if(action.type==='UPDATE-NEW-POST-TEXT'){
        this._state.profilePage.newPostText=action.newText;
        this._callSubscriber(this._state);
        }
    }
}


export const addPostsActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const onPostChangeActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default store

// let rerenderEntireTree=()=>{}

// let state = {
//     profilePage: {
//         postData: [
//             {message: "Hello, this is my 1 post through the props", id: v1(), likesCount: 23},
//             {message: "Hello, this is my 2message post through the props", id: v1(), likesCount: 25},
//             {message: "Hello, this is my 3 post through the props", id: v1(), likesCount: 27},
//         ],newPostText:"FLUX data"
//     },
//     messagesPage: {
//         dialogData: [
//             {name: "John", id: v1()},
//             {name: "Jerry", id: v1()},
//             {name: "Andrea", id: v1()},
//             {name: "Lois", id: v1()},
//             {name: "Anatoliy", id: v1()},],
//         messagesData: [
//             {message: "Hello buddy", id: v1()},
//             {message: "Go to the stroll today?", id: v1()},
//             {message: "Do you learned something from React today ?", id: v1()},
//         ]
//     }
// }

// export let addPost = (postMessage) => {
//     let newPost = {
//         id: v1(),
//         message: postMessage,
//         likesCount: 0
//     }
//     store.state.profilePage.postData.push(newPost);
//     store.state.profilePage.newPostText="";
//     rerenderEntireTree(store.state);
    
    
// }
// export let updateNewPostText = (newText) => {
   
//     store.state.profilePage.newPostText=newText;
//     rerenderEntireTree(store.state);
    
// }

// export const subscribe=(observer)=>{
//     rerenderEntireTree=observer;
// }
