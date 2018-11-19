import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburger-yukee.firebaseio.com/'
});

export default instance;