import http from '../../shared/services/http-common';

export class UserService{
    registerUser(data){
        return http.post('/register',data);
    }

    loginUser(data){
        return http.post('/login',data);
    }

    getUserById(id){
        return http.get(`/${id}`);
    }

}