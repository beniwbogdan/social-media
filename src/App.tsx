import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App(props:any) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <Routes>
                    <Route  path="/profile" element={<Profile postData={props.postData} />}></Route>
                    <Route  path="/dialogs" element={<Dialogs dialogData={props.dialogData} messagesData={props.messagesData}   />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
            );

            }

            export default App;
