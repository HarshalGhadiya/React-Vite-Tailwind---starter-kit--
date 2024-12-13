import axios from 'axios';
import { isEmpty, isString } from 'lodash';

const AxiosDefaultSetting = async ({
    method = 'GET',
    data = null,
    url,
    contentType = 'application/json',
    customHeaders = {},
    responseType = 'json',
}) => {
    const AxiosDefault = axios.create({
        baseURL: `${import.meta.env.VITE_APP_API_URL}`,
        timeout: 15000,
        headers: {
            'Content-Type': contentType,
            Accept: 'application/json',
            ...customHeaders,
        },
        responseType: responseType,
    });

    // Request interceptor to add Authorization header if token exists
    AxiosDefault.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );

    // Response interceptor to handle errors
    AxiosDefault.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error?.response?.status === 401) {
                // localStorage.removeItem('token');
                // window.location.href = `${ routes.signIn } ? logout = true`;
            }
            return Promise.reject(error);
        }
    );

    return AxiosDefault({
        method,
        data,
        url,
        contentType,
    });
};

export default AxiosDefaultSetting;
