import http from "@/shared/services/http-common";

export class PetprofileService{
    getAll(){
        return http.get('/pets');
    }
    create(data){
        return http.post('/pets',data);
    }
    update(id, data) {
        return http.put(`/pets/${id}`, data);
    }
    delete(id){
        return http.put(`/pets/${id}`);
    }
}