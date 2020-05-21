import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const postsData = [
    {id: 1, post: "Hi! how are you?", likesCount: 12},
    {id: 2, post: "It's my first post!", likesCount: 7},
    {id: 3, post: "It's awesome!", likesCount:25 },
];

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>

                <Navbar/>

                <div className="app-wrapper-content">
                    <Route path='/profile' render={ () => <Profile postsData={postsData}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs/>}/>
                </div>


            </div>
        </BrowserRouter>

    );
}

export default App;
