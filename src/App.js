import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>

                <Navbar/>

                <div className="app-wrapper-content">

                    <Route path='/profile'
                           render={ () => <Profile
                              store={props.store}
                           />
                           }
                    />
                    <Route path='/dialogs'
                           render={() => <DialogsContainer
                               // dialogs={props.state.profilePage.dialogs}
                               // messages={props.state.messagesPage.messages}
                               store ={props.store}

                               // dispatch = {props.dispatch}
                               // addMessage={props.addMessage}
                           />}
                    />
                </div>


            </div>
        </BrowserRouter>
    );
};

export default App;
