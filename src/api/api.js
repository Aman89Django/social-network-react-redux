import *as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '67a04fae-7e15-4eb7-aaca-7ade153357bc'},
    withCredentials: true,
});

// for get users list (usersContainer.jsx)


// export const usersAPI = {
//     async getUsers(currentPage = 1, pageSize = 10) {
//         try {
//             const response =await fetch(instance.get(`users?page=${currentPage}&count=${pageSize}`))
//            return  response => {
//                 return response.data
//             }
//         } catch(e){
//             console.error(e)
//         }
//     },

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

// for unfolloww Users (Users.jsx)
    unfollowUsers(id) {
        return instance.delete(`follow/${id}`)
            .then(response =>{
                return response.data
            })
    },
    // for get user ID (profileContainer.jsx)
    getProfile(userId) {
        console.warn('Obselete method. Please update for profileAPI');
        return profileAPI.getProfile(userId);
    }
};
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response =>{
                return response.data
            })
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response =>{
                return response.data
            })
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status:status})
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
    },
    login(email, password, rememberMe= false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response =>{
                return response.data
            })
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response =>{
                return response.data
            })
    },

};


