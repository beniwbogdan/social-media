import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import UsersContainer from "./Components/Users/UsersContainer"
import { Route, Routes } from "react-router-dom";
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';


function App() {

    return (
        <>

            <div className="app-wrapper">
                <HeaderContainer />
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

                    <Route path='/login' element={<Login />} />
                </Routes>
            </div>
        </>
    );

}

export default App;
