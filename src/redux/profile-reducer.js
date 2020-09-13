import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        {id: 1, post: "Hi! how are you?", likesCount: 12},
        {id: 2, post: "It's my first post!", likesCount: 7},
        {id: 3, post: "It's awesome!", likesCount: 25},
    ],
    profile: null,
    status: '',

};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case  ADD_POST :
            let newPost = {
                id: 5,
                post: action.post,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };

        // state.posts.push(newPost);
        // state.newPostText = '';
        // return state;

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

        case "DELETE_POST" :
            return {
                ...state, posts: state.posts.filter(p => p.id != action.postId)
            };
        case SAVE_PHOTO_SUCCESS :
            return {
                ...state, profile: {...state.profile, photos: action.photos}
            };
        default:
            return state;
    }
};

export const addPostActionCreator = (post) => ({type: ADD_POST, post});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
// this AC for test
export const deletePost = postId => ({type: 'DELETE_POST', postId});
export const savePhotoSuccess = photos => ({type: SAVE_PHOTO_SUCCESS, photos});
// --- //

export const setStatus = status => ({type: SET_USER_STATUS, status});


export const getUserProfile = (userId) => async (dispatch) => {
    let data = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(data));
};

export const getUserStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(setStatus(data));
};
export const updateStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export const savePhoto = (file) => async (dispatch) => {
    let data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos));
    }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    let data = await profileAPI.saveProfile(profile);
    if (data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    }
    else {
        let messages= data.messages.length >0 ? data.messages[0] : "Some error";
        dispatch(stopSubmit("edit-profile", {_error: messages}));
        // dispatch(stopSubmit("edit-profile", {"contacts":{"facebook": messages}}))
        return Promise.reject(messages);
    }
};

export default profileReducer;