import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>

                <Navbar/>

                <div className="app-wrapper-content">

                    <Route path='/profile'
                           render={ () => <Profile
                               posts={props.state.profilePage.posts} addPost={props.addPost}/>}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               dialogs={props.state.profilePage.dialogs}
                               messages={props.state.messagesPage.messages}/>}/>
                </div>


            </div>
        </BrowserRouter>

    );
}

export default App;
