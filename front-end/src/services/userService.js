import axios from 'axios';
import authParams from './authParams';

const API_URL = 'http://localhost:4000/user/';

const getUserProfile = async () => {
    return await axios.get(API_URL + 'profile', { params: authParams() }).then((res) => {
        return res;
    });
};

export { getUserProfile };
