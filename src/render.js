import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {addPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                addPost={addPost}
                appState={state}
            />
        </BrowserRouter>
        ,
         document.getElementById('root')
    );
}