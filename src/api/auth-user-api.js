import axios from "axios";
import instance from "./api"

export const authUserAPI = {
    authUser(){
        return instance.get("auth/me").then(response => response.data);
    },
}