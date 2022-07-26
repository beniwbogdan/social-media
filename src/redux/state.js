import {v1} from "uuid";
import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        postData: [
            {message: "Hello, this is my 1 post through the props", id: v1(), likesCount: 23},
            {message: "Hello, this is my 2message post through the props", id: v1(), likesCount: 25},
            {message: "Hello, this is my 3 post through the props", id: v1(), likesCount: 27},
        ]
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
}

export let addPost = (postMessage) => {
    let newPost = {
        id: v1(),
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.postData.push(newPost);
    rerenderEntireTree(state);
}

export default state