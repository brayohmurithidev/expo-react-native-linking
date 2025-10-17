import apiClient from './client';
import { ReferralLink } from './types';

const getWebAppUrl = () => process.env.EXPO_PUBLIC_WEB_APP_URL || 'https://expo-react-native-linking.vercel.app';

export const referralApi = {
  async getReferralLink(): Promise<ReferralLink> {
    try {
      const response = await apiClient.post('/referrals/link');
      const data = response.data;
      
      return {
        code: data.code,
        url: data.url || `${getWebAppUrl()}/referral?code=${data.code}`,
        shareCount: data.share_count || 0,
        createdAt: data.created_at || new Date().toISOString(),
      };
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to get referral link');
    }
  },

  async generateReferralLink(): Promise<ReferralLink> {
    try {
      const response = await apiClient.post('/referrals/link');
      const data = response.data;
      
      return {
        code: data.code,
        url: data.url || `${getWebAppUrl()}/referral?code=${data.code}`,
        shareCount: data.share_count || 0,
        createdAt: data.created_at || new Date().toISOString(),
      };
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to generate referral link');
    }
  },

  async shareReferralLink(code: string): Promise<void> {
    try {
      await apiClient.post('/referrals/share', { code });
    } catch (error: any) {
      console.log('Failed to track share event:', error.response?.data?.message);
      // Don't throw error for share tracking failures
    }
  },
};
