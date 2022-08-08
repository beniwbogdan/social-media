import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {addPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import {updateNewPostText} from './redux/state'

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                addPost={addPost}
                appState={state}
                updateNewPostText={updateNewPostText}
            />
        </BrowserRouter>
        ,
         document.getElementById('root')
    );
}