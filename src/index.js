import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const postsData = [
    {id: 1, post: "Hi! how are you?", likesCount: 12},
    {id: 2, post: "It's my first post!", likesCount: 7},
    {id: 3, post: "It's awesome!", likesCount:25 },
];

ReactDOM.render(<App postsData={postsData}/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
