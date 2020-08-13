import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    posts: [
        {id: 1, post: "Hi! how are you?", likesCount: 12},
        {id: 2, post: "It's my first post!", likesCount: 7},
        {id: 3, post: "It's awesome!", likesCount: 25},
    ],
    newPostText: 'Aman',
    profile: null,
    status: '',

};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case  ADD_POST :
            let newPost = {
                id: 5,
                post: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };

        // state.posts.push(newPost);
        // state.newPostText = '';
        // return state;
        case UPDATE_NEW_POST_TEXT :
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE :
            return {
                ...state,
                profile: action.profile
            };
        case SET_USER_STATUS :
            return {
                ...state,
                status: action.status
            };
        // state.newPostText = action.newText;
        // return state;
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setStatus = status => ({type: SET_USER_STATUS, status});


export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data));
        });
};
export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(data => {
            dispatch(setStatus(data));
        });
};
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if(data.resultCode ===0) {
                dispatch(setStatus(status));
            }

        });
};

export default profileReducer;