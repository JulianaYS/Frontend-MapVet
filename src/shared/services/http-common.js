import axios from 'axios';

export default axios.create({
    baseURL: 'https://my-json-server.typicode.com/Yorusito/VetCareDB',
    headers: { 'Content-type': 'application/json' }
});
