// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";
// import sidebarReducer from "./sidebar-reducer";
//
//
// const store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, post: "Hi! how are you?", likesCount: 12},
//                 {id: 2, post: "It's my first post!", likesCount: 7},
//                 {id: 3, post: "It's awesome!", likesCount: 25},
//             ],
//             newPostText: 'Aman',
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: "Aman", img: "https://i.ebayimg.com/00/s/MTYwMFgxMDE4/z/zzwAAOSwstJZR5WU/$_7.PNG"},
//                 {id: 2, name: "Aigerim", img: "https://miraclelearningcentre.com/wp-content/uploads/2016/04/song.png"},
//                 {id: 3, name: "Sultan", img: "https://i.ebayimg.com/00/s/MTYwMFgxMDE4/z/zzwAAOSwstJZR5WU/$_7.PNG"},
//                 {id: 4, name: "Aiganym", img: "https://miraclelearningcentre.com/wp-content/uploads/2016/04/song.png"},
//                 {id: 5, name: "Makhambet", img: "https://i.ebayimg.com/00/s/MTYwMFgxMDE4/z/zzwAAOSwstJZR5WU/$_7.PNG"},
//             ],
//             messages: [
//                 {id: 1, message: "Hi!"},
//                 {id: 2, message: "Hello there!"},
//                 {id: 3, message: "How are you?"},
//                 {id: 4, message: "Yo!"},
//                 {id: 5, message: "Everything cools!"},
//             ],
//             newMessageBody: "",
//         },
//         sidebar: {},
//
//     },
//     _callSubscriber() {
//         console.log('state changed');
//     },
//
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action) {
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//
//         this._callSubscriber(this._state);
//
//     }
// };
//
//
// export default store;
// window.store = store;
