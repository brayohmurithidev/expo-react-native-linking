import { AuthResponse, LoginRequest, RegisterRequest, ProfileResponse } from './types';
import apiClient from './client';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const authApi = {
  async login(credentials: LoginRequest): Promise<AuthResponse> {
    try {
      const response = await apiClient.post('/auth/login', credentials);
      const data = response.data;
      
      // Store tokens
      await AsyncStorage.setItem('access_token', data.access_token);
      await AsyncStorage.setItem('refresh_token', data.refresh_token);
      await AsyncStorage.setItem('user', JSON.stringify(data.user));
      
      return data;
    } catch (error: any) {
      if (error.response?.status === 401) {
        throw new Error('Invalid credentials');
      }
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  },

  async register(userData: RegisterRequest): Promise<AuthResponse> {
    try {
      const response = await apiClient.post('/auth/register', userData);
      const data = response.data;
      
      // Store tokens
      await AsyncStorage.setItem('access_token', data.access_token);
      await AsyncStorage.setItem('refresh_token', data.refresh_token);
      await AsyncStorage.setItem('user', JSON.stringify(data.user));
      
      return data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
  },

  async logout(): Promise<void> {
    try {
      // Call logout endpoint if it exists
      await apiClient.post('/auth/logout');
    } catch (error) {
      console.log('Logout endpoint not available or failed');
    } finally {
      // Always clear local storage
      await AsyncStorage.multiRemove(['access_token', 'refresh_token', 'user']);
    }
  },

  async getCurrentUser(): Promise<ProfileResponse> {
    try {
      const response = await apiClient.get('/users/me');
      return response.data;
    } catch (error: any) {
      if (error.response?.status === 401) {
        // Token expired, clear storage
        await AsyncStorage.multiRemove(['access_token', 'refresh_token', 'user']);
        throw new Error('Session expired');
      }
      throw new Error(error.response?.data?.message || 'Failed to get user profile');
    }
  },

  async refreshToken(): Promise<{ access_token: string; refresh_token: string }> {
    try {
      const refreshToken = await AsyncStorage.getItem('refresh_token');
      if (!refreshToken) {
        throw new Error('No refresh token available');
      }

      const response = await apiClient.post('/auth/refresh', {
        refresh_token: refreshToken,
      });

      const { access_token, refresh_token: newRefreshToken } = response.data;
      await AsyncStorage.setItem('access_token', access_token);
      await AsyncStorage.setItem('refresh_token', newRefreshToken);

      return { access_token, refresh_token: newRefreshToken };
    } catch (error: any) {
      await AsyncStorage.multiRemove(['access_token', 'refresh_token', 'user']);
      throw new Error('Token refresh failed');
    }
  },
};
