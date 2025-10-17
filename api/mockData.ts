import { User, ReferralLink } from './types';

// Mock user data
export const mockUser: User = {
  id: '1',
  email: 'john.doe@example.com',
  firstName: 'John',
  lastName: 'Doe',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  referralCode: 'JOHN123',
  createdAt: '2024-01-15T10:30:00Z',
};

// Mock referral link
export const mockReferralLink: ReferralLink = {
  code: 'JOHN123',
  url: 'https://expo-react-native-linking.vercel.app/referral?code=JOHN123',
  shareCount: 5,
  createdAt: '2024-01-15T10:30:00Z',
};

// Simulate API delay
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
