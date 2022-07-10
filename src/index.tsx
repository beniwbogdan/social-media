import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export  let dialogData = [
    {name: "John", id: 1},
    {name: "Jerry", id: 2},
    {name: "Andrea", id: 3},
    {name: "Lois", id: 4},
    {name: "Anatoliy", id: 5},
]
export let messagesData = [
    {message: "Hello buddy", id: 1},
    {message: "Go to the stroll today?", id: 2},
    {message: "Do you learned something from React today ?", id: 3},
]
export let postData = [
    {message: "Hello, this is my 1 post through the props", id: 1, likesCount:23},
    {message: "Hello, this is my 2message post through the props", id: 2, likesCount:25},
    {message: "Hello, this is my 3 post through the props", id: 3, likesCount:27},

]
ReactDOM.render(
    <App />,
  document.getElementById('root')
);