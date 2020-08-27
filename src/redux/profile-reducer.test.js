import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

// 0. initialState
let state = {
    posts: [
        {id: 1, post: "Hi! how are you?", likesCount: 12},
        {id: 2, post: "It's my first post!", likesCount: 7},
        {id: 3, post: "It's awesome!", likesCount: 25},
    ],
};


it('length of posts should be incremented', ()=>{
    // 1. test data
    let action = addPostActionCreator('New post');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});



it('post of new post should be correct', () =>{
    // 1. test data
    let action = addPostActionCreator('New post');


    // 2. action
    let newState = profileReducer(state, action);


    // 3. expectation
    expect(newState.posts[3].post).toBe('New post');
});

it('after deleting length of post should be decrement', ()=>{
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(2)
})