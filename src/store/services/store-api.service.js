import http from '../../shared/services/http-common';

export class StoreApiService{
    getAll() {
        return http.get('/products');
    }
}