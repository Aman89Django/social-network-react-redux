import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from './redux/app-reducer'
import PreLoader from "./components/Common/Preloader/PreLoader";
import store from "./redux/redux-store";


class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    };

    render() {
        if(!this.props.initialized) {
            return <PreLoader />
        }
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">

                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}
                        />
                        <Route path='/dialogs'
                               render={() => <DialogsContainer/>}
                        />
                        <Route path='/users'
                               render={() => <UsersContainer/>}
                        />
                        <Route path='/login'
                               render={() => <LoginPage/>}
                        />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}


const mapStateToProps = state => ({
    initialized: state.app.initialized,
});

const AppContainer = compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);

const SocialApp = props =>{
    return <BrowserRouter>
    <Provider store={store}>
        <AppContainer />
    </Provider>
</BrowserRouter>};

export default SocialApp;
