import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    header: {
        "API-KEY": '31438ad6-6e7e-4774-9744-3b6df5ed67e1',
    }
})

export default instance;