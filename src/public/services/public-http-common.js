import axios from 'axios';

export default axios.create({
    baseURL: 'https://my-json-server.typicode.com/daniel-vl7/rewearDB',
    headers: { 'Content-type': 'application/json' }
});
