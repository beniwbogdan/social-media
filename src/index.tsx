import './index.css';
import store from "./redux/state.js";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
//import { updateNewPostText, addPost, subscribe } from './redux/state'


let rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                addPost={store.addPost.bind(store)}
                appState={state}
                updateNewPostText={store.updateNewPostText.bind(store)}
            />
        </BrowserRouter>
        ,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);