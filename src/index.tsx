import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost} from "./redux/state.js";

ReactDOM.render(
    <App
        addPost={addPost}
        appState={state}
        // dialogData={state.dialogData}
        // messagesData={state.messagesData}
        // postData={state.postData}
    />,
    document.getElementById('root')
);