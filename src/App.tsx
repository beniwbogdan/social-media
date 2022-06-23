import React from 'react';
import './App.css';
import Technologies from "./Technologies/Technologies";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function App() {
    return (
        <div className="app-wrapper">
           <Header/>

            <nav className={"nav"}>
                <div><a href="#s">Profile</a></div>
                <div><a href="#s">Messages</a></div>
                <div><a href="#s">News</a></div>
                <div><a href="#s">Music</a></div>
                <div><a href="#s">Settings</a></div>
            </nav>

            <div className={"content"}>
                <div>
                    <img src="https://wallpaper.dog/large/20536905.jpg" alt=""/>
                </div>
                <div>ava + desc</div>
                <div>My posts
                    <div>New post</div>
                </div>
                <div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                </div>
            </div>
        </div>
    );
}

export default App;
