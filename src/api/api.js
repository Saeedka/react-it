import * as axios from "axios";

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": "72c48e1c-255e-4768-82c5-5efc1fb088b4"
        }
    }
)

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },

    follow(userId) {
        return instance.post(`follow/` + userId)
    },

    unfollow(userId) {
        return instance.delete(`follow/` + userId)
    }
}

export const profileAPI = {
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe,captcha) {
        return instance.post(`auth/login`, {email: email, password: password, rememberMe: rememberMe, captcha:captcha})
    },
    logout() {
        return instance.delete(`auth/login`)
    },
    getCaptcha(){
        return instance.get('security/get-captcha-url');
    }
}

export const dialogsAPI={
    getDialogs(){
        return instance.get('dialogs')
    },
    getMessages(userId){
        return instance.get(`dialogs/${userId}/messages`)
    },
    sendMessage(userId,message){
        debugger
        return instance.post(`dialogs/${userId}/messages`,{body: message})
    }
}