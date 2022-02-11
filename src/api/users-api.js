import instance from "./api"

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response =>{return response.data});
    },
    followUser(userId){
        return instance.post(`follow/${userId}`).then(response => response.data);
    },
    unFollowUser(userId){
        return instance.post(`unfollow/${userId}`).then(response => response.data);
    }
}