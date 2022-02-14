import axios from "axios";
import instance from "./api"

export const  userProfileAPI = {
    getUserInfo(userId){
        console.warn('Absolute method')
        return instance.get(`profile/${userId}`).then(response => response.data);
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`).then(response => response.data);
    },
    updateStatus(statusText){
        return instance.put(`profile/status`,{
            status: statusText,
        }).then(response => response.data);
    }

}