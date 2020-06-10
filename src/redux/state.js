let rerenderEntireTree;

let state = {
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

};

window.state = state;
export let addPost = () => {
    let newPost = {
        id: 5,
        post: state.profilePage.newPostText,
        likesCount: 0,
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText= '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export let addMessage = (newMessage) => {
    let newMes = {
        id: 6,
        message: newMessage,
    };

    state.messagesPage.messages.push(newMes);
    rerenderEntireTree(state);
};

export const subscribe = (observer) =>{
    rerenderEntireTree = observer;
};



export default state;
