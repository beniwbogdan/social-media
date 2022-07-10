import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import state from "./redux/state";

function App(props:any) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <Routes>
                    <Route  path="/profile" element={<Profile postData={state.postData} />}></Route>
                    <Route  path="/dialogs" element={<Dialogs dialogData={state.dialogData} messagesData={state.messagesData}   />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
            );

            }

            export default App;
