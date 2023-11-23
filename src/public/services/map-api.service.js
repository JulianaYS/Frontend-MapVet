import publicHttpCommon from "@/public/services/public-http-common";

export class MapApiService{
    getAll(){
        return publicHttpCommon.get('/cards');
    }
}