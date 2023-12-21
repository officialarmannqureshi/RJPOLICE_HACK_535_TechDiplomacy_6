// authProvider.js
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';

const authProvider = (type, params) => {
    switch (type) {
        case AUTH_LOGIN:
            const { username, password } = params;
            // Implement your authentication logic here
            if (username === 'admin' && password === '123') {
                localStorage.setItem('role', 'admin');
                return Promise.resolve();
            } else {
                localStorage.removeItem('role');
                return Promise.reject('Invalid credentials');
            }

        case AUTH_LOGOUT:
            localStorage.removeItem('role');
            return Promise.resolve();

        case AUTH_ERROR:
            const { status } = params;
            if (status === 401 || status === 403) {
                localStorage.removeItem('role');
                return Promise.reject();
            }
            return Promise.resolve();

        case AUTH_CHECK:
            return localStorage.getItem('role') ? Promise.resolve() : Promise.reject();

        default:
            return Promise.resolve();
    }
};

export default authProvider;
