import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from './Components/Dialogs/DialogsContainer';


function App(props: any) {
    const MyContext = React.createContext(props.store);

    return (
        <>

            <div className="app-wrapper">
                <Header />
                <Navbar />
                <Routes>
                    <Route path="/profile"
                        element={
                            <Profile
                                // addPost={props.addPost}
                                store={props.store}
                            // profilePage={props.appState.profilePage}
                            // dispatch={props.dispatch}
                            />}>

                    </Route>
                    <Route path="/dialogs" element={
                        <DialogsContainer
                            store={props.store}
                        // appState={props.appState.messagesPage} 
                        />}>
                    </Route>
                </Routes>

            </div>

        </>
    );

}

export default App;
