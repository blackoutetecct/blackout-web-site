import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://blackoutchatwebsite-production.up.railway.app/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': '*'
    }
});