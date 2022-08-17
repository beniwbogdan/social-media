import './index.css';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

let rerenderEntireTree = (state: any) => {

    ReactDOM.render(
        <BrowserRouter>
            <App

                store={store}
                appState={state}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter >

        ,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});