import axios from 'axios';
import authParams from './authParams';

const API_URL = process.env.REACT_APP_API_ROUTE + '/user/';

const getUserProfile = async () => {
    return await axios.get(API_URL + 'profile', { params: authParams() }).then((res) => {
        return res;
    });
};

export { getUserProfile };
