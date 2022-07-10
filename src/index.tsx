import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from "./redux/state.js";


ReactDOM.render(
    <App
        appState={state}
        // dialogData={state.dialogData}
        // messagesData={state.messagesData}
        // postData={state.postData}
    />,
    document.getElementById('root')
);