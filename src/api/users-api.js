import axios from "axios";
import instance from "./api"
import { userProfileAPI } from "./profile-api";

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response =>{return response.data});
    },
    follow(userId){
        return instance.post(`follow/${userId}`).then(response => response.data);
    },
    unFollow(userId){
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`).then(response => response.data);
    },
    getUserInfo(userId){
        return userProfileAPI.getUserInfo(userId);
    },
   
}