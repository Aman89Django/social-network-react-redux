const ADD_POST = 'ADD-POST';

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: "Hi! how are you?", likesCount: 12},
                {id: 2, post: "It's my first post!", likesCount: 7},
                {id: 3, post: "It's awesome!", likesCount: 25},


            ],
            newPostText: 'Aman',

            dialogs: [
                {id: 1, name: "Aman", img: "https://i.ebayimg.com/00/s/MTYwMFgxMDE4/z/zzwAAOSwstJZR5WU/$_7.PNG"},
                {id: 2, name: "Aigerim", img: "https://miraclelearningcentre.com/wp-content/uploads/2016/04/song.png"},
                {id: 3, name: "Sultan", img: "https://i.ebayimg.com/00/s/MTYwMFgxMDE4/z/zzwAAOSwstJZR5WU/$_7.PNG"},
                {id: 4, name: "Aiganym", img: "https://miraclelearningcentre.com/wp-content/uploads/2016/04/song.png"},
                {id: 5, name: "Makhambet", img: "https://i.ebayimg.com/00/s/MTYwMFgxMDE4/z/zzwAAOSwstJZR5WU/$_7.PNG"},
            ],
        },
        messagesPage: {
            messages: [
                {id: 1, message: "Hi!"},
                {id: 2, message: "Hello there!"},
                {id: 3, message: "How are you?"},
                {id: 4, message: "Yo!"},
                {id: 5, message: "Everything cools!"},
            ],
        },

    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                post: this._state.profilePage.newPostText,
                likesCount: 0,
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === 'ADD-MESSAGE') {
            let newMes = {
                id: 6,
                message: action.newMessage,
            };

            this._state.messagesPage.messages.push(newMes);
            this._callSubscriber(this._state);
        }
    }
};


export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) =>
    ({
        type: UPDATE_NEW_POST_TEXT, newText: text
    });

export default store;
window.store = store;
