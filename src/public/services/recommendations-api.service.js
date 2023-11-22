import publicHttpCommon from "@/public/services/public-http-common";

export class RecommendationsApiService{
    getAll(){
        return publicHttpCommon.get('/cards');
    }

}