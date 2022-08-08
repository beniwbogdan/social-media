import './index.css';
import state from "./redux/state.js";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { updateNewPostText, addPost, subscribe } from './redux/state'


let rerenderEntireTree = (state: any) => {
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
rerenderEntireTree(state);

subscribe(rerenderEntireTree);