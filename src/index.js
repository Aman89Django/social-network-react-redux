import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App
                    // state={state}
                    // dispatch = {store.dispatch.bind(store)}
                    // store = { store }
                    // addPost={store.addPost.bind(store)}
                    // updateNewPostText={store.updateNewPostText.bind(store)}
                    // addMessage={store.addMessage.bind(store)}
                />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
};

rerenderEntireTree();
store.subscribe(() => {
    rerenderEntireTree();
});

// rerenderEntireTree(store.getState());
// store.subscribe(() => {
//     let state = store.getState();
//     rerenderEntireTree(state);
// });



serviceWorker.unregister();














