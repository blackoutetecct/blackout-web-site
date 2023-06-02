import axios from 'axios';

export const api = axios.create({
    baseURL:'https://chatblackout-production.up.railway.app/'
});