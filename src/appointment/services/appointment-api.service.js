import http from '../../shared/services/http-common';

export class AppointmentApiService {
    getAll() {
        return http.get('/appointment');
    }
    getById(id) {
        return http.get(`/appointment/${id}`);
    }
    create(data) {
        return http.post('/appointment', data);
    }
    update(id, data) {
        return http.put(`/appointment/${id}`, data);
    }

    delete(id) {
        return http.delete(`/appointment/${id}`);
    }
    findByTitle(title) {
        return http.get(`/appointment?title=${title}`);
    }
}
