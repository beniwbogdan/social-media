import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from './Components/Dialogs/DialogsContainer';


function App() {


    return (
        <>

            <div className="app-wrapper">
                <Header />
                <Navbar />
                <Routes>
                    <Route path="/profile"
                        element={
                            <Profile />}>
                    </Route>

                    <Route path="/dialogs" element={
                        <DialogsContainer />}>
                    </Route>
                </Routes>
            </div>
        </>
    );

}

export default App;
