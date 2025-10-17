import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL || 'https://aara-api.fazilabs.com/api';

// Create axios instance
export const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
    },
});

// Request interceptor to add auth token
apiClient.interceptors.request.use(
    async (config) => {
        try {
            const token = await AsyncStorage.getItem('access_token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        } catch (error) {
            console.log('Error getting token:', error);
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle token refresh
apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = await AsyncStorage.getItem('refresh_token');
                if (refreshToken) {
                    // Try to refresh token
                    const response = await axios.post(`${BASE_URL}/auth/refresh-token`, {
                        refresh_token: refreshToken,
                    });

                    const {access_token, refresh_token: newRefreshToken} = response.data;
                    await AsyncStorage.setItem('access_token', access_token);
                    await AsyncStorage.setItem('refresh_token', newRefreshToken);

                    // Retry original request
                    originalRequest.headers.Authorization = `Bearer ${access_token}`;
                    return apiClient(originalRequest);
                }
            } catch (refreshError) {
                // Refresh failed, redirect to login
                await AsyncStorage.multiRemove(['access_token', 'refresh_token', 'user']);
                // You might want to emit an event here to redirect to login
            }
        }

        return Promise.reject(error);
    }
);

export default apiClient;
