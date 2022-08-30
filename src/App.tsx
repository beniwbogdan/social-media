import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import UsersContainer from "./Components/Users/UsersContainer"
import { Route, Routes } from "react-router-dom";
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';


function App() {

    return (
        <>

            <div className="app-wrapper">
                <Header />
                <Navbar />
                <Routes>

                    <Route path="/profile/:userId"
                        element={
                            <ProfileContainer />}>
                    </Route>
                    <Route path='/profile' element={<ProfileContainer />} />
                    <Route path='/dialogs' element={
                        <DialogsContainer />}>
                    </Route>

                    <Route path="/users" element={
                        <UsersContainer />}>
                    </Route>
                </Routes>
            </div>
        </>
    );

}

export default App;
