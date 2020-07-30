const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
let initialState = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: 'https://cdn0.iconfinder.com/data/icons/avatar-78/128/2-512.png',
        //     followed: false,
        //     fullName: 'Aman',
        //     status: 'Hey guys!',
        //     location: {city: 'Shymkent', country: 'Kazakhstan'}
        // },
        // {
        //     id: 2,
        //     photoUrl: 'https://cdn0.iconfinder.com/data/icons/avatar-78/128/2-512.png',
        //     followed: true,
        //     fullName: 'Antony',
        //     status: 'Hello world!',
        //     location: {city: 'Moscow',
        //     country: 'Russia'}
        // },
        // {
        //     id: 3,
        //     photoUrl: 'https://cdn0.iconfinder.com/data/icons/avatar-78/128/2-512.png',
        //     followed: false,
        //     fullName: 'Andrew',
        //     status: 'Hey guys!',
        //     location: {city: 'Alberta',
        //     country: 'Canada'}
        // },
    ]
};


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {...state,
                users: state.users.map( u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                }) };
        case UNFOLLOW:
            return {...state,
            users: state.users.map(u => {
                if(u.id === action.userId) {
                    return{ ...u, followed: false};
                }
                return u;
            })};
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users],
            };
        default:
            return state;

    }

};

export const followAC = userId =>({type: FOLLOW, userId});
export const unfollowAC = userId => ({type: UNFOLLOW, userId});
export const setUsersAC = users => ({type:SET_USERS, users});



export default usersReducer;