import http from "@/shared/services/http-common";

export class MapApiService{
    getAll(){
        return http.get('/maps');
    }
}