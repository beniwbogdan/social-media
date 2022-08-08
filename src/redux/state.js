import {v1} from "uuid";

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
    getState(){
        return this._state
    },
    rerenderEntireTree(){

    },
    addPost (postMessage){
        let newPost = {
            id: v1(),
            message: postMessage,
            likesCount: 0
        }
        this.store._state.profilePage.postData.push(newPost);
        this.store._state.profilePage.newPostText="";
        this.rerenderEntireTree(this.store._state);
    },
    updateNewPostText(newText){
        this.store._state.profilePage.newPostText=newText;
        this.rerenderEntireTree(this.store._state);
    },
    subscribe(observer){
    this.rerenderEntireTree=observer;
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
