import *as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'aa33f5b6-69e4-42b5-b997-581073e89c4b'},
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
};

