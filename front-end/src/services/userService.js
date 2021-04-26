import axios from 'axios';
import authParams from './authParams';

const API_URL = 'http://localhost:4000/user/';

const getUserProfile = () => {
    return axios.get(API_URL + 'profile', { params: authParams() });
};

module.exports = {
    getUserProfile,
};
