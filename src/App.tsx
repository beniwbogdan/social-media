import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";


function App(props: any) {

    return (
        <>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <Routes>
                    <Route path="/profile"
                        element={<Profile
                            // addPost={props.addPost}
                            profilePage={props.appState.profilePage}
                            dispatch={props.dispatch}
                        />}>

                    </Route>
                    <Route path="/dialogs" element={<Dialogs
                        appState={props.appState.messagesPage} />}>
                    </Route>
                </Routes>
            </div>
        </>
    );

}

export default App;
