import http from '../../shared/services/http-common';

export class UserService{
    registerUser(data){
        return http.post('/register',data);
    }

    getUserById(id){
        return http.get(`/${id}`);
    }

}