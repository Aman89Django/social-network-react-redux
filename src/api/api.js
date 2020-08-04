import *as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '67a04fae-7e15-4eb7-aaca-7ade153357bc'},
    withCredentials: true,
});

// for get users list (usersContainer.jsx)
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
// for follow Users (Users.jsx)
    followUsers(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },

// for unfollow Users (Users.jsx)
    unfollowUsers(id) {
        return instance.delete(`follow/${id}`)
            .then(response =>{
                return response.data
            })
    },
    // for get user ID (profileContainer.jsx)
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response =>{
                return response.data
            })
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response =>{
                return response.data
            })
    }
};

