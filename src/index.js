import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SocialApp from './App';
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


ReactDOM.render(<SocialApp />,  document.getElementById('root'));


// rerenderEntireTree(store.getState());
// store.subscribe(() => {
//     let state = store.getState();
//     rerenderEntireTree(state);
// });


serviceWorker.unregister();














