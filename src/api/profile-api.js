import axios from "axios";
import instance from "./api"

export const  userProfileAPI = {
    getUserInfo(userId){
        return instance.get(`profile/${userId}`).then(response => response.data);
    },
}