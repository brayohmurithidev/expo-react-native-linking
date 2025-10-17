import { AuthResponse, LoginRequest, RegisterRequest } from './types';
import { mockUser, delay } from './mockData';

export const authApi = {
  async login(credentials: LoginRequest): Promise<AuthResponse> {
    await delay(1000); // Simulate network delay
    
    // Mock validation
    if (credentials.email === 'john@example.com' && credentials.password === 'password') {
      return {
        user: mockUser,
        token: 'mock-jwt-token-12345',
      };
    }
    
    throw new Error('Invalid credentials');
  },

  async register(userData: RegisterRequest): Promise<AuthResponse> {
    await delay(1200);
    
    // Mock registration
    const newUser = {
      ...mockUser,
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      referralCode: userData.firstName.toUpperCase() + '123',
    };
    
    return {
      user: newUser,
      token: 'mock-jwt-token-67890',
    };
  },

  async logout(): Promise<void> {
    await delay(500);
    // In real app, invalidate token on server
  },

  async getCurrentUser(): Promise<AuthResponse['user']> {
    await delay(800);
    return mockUser;
  },
};
