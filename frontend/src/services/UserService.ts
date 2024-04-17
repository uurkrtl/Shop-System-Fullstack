import axios from "axios";
import {User} from "../types/User.ts";

export default class UserService {
    login(user: User) {
        return axios.post('/api/users/login', {}, {
            auth: {
                username: user.username,
                password: user.password
            }
        });
    }

    register(user: User) {
        return axios.post('/api/users/register', user);
    }

    getLoggedInUser() {
        return axios.get('/api/users/me');
    }

    logout() {
        return axios.post('/api/users/logout');
    }

    getAllAppUsers() {
        return axios.get('/api/users');
    }

    getAppUserById(ownId: string, role: string, id: string) {
        return axios.get(`/api/users/${id}?ownId=${ownId}&role=${role}`);
    }

    updateUser(ownId: string, role: string, id: string, user: User) {
        return axios.put(`/api/users/${id}?ownId=${ownId}&role=${role}`, user);
    }

    deleteUser(id: string) {
        return axios.delete(`/api/users/${id}`);
    }
}