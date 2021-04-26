import axios from 'axios';

const API_URL = 'http://localhost:4000/auth/';

const register = (email, password) => {
    return axios.post(API_URL + 'signup', {
        email,
        password,
    });
};

const login = (email, password) => {
    return axios
        .post(API_URL + 'login', {
            email,
            password,
        })
        .then((response) => {
            if (response.data.token) {
                console.log('saving token');
                localStorage.setItem('token', JSON.stringify(response.data.token));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem('token');
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('token'));
};
export { register, login, logout, getCurrentUser };
