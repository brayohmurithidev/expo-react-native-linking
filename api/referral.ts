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
      console.log('Attempting to generate referral link...');
      console.log('API Base URL:', process.env.EXPO_PUBLIC_API_BASE_URL);
      
      const response = await apiClient.post('/referrals/link');
      const data = response.data;
      
      console.log('Referral link generation response:', {
        status: response.status,
        data: data,
        headers: response.headers
      });
      
      if (!data.code) {
        console.error('No referral code in response:', data);
        throw new Error('No referral code returned from server');
      }
      
      const referralLink = {
        code: data.code,
        url: data.url || `${getWebAppUrl()}/referral?code=${data.code}`,
        shareCount: data.share_count || 0,
        createdAt: data.created_at || new Date().toISOString(),
      };
      
      console.log('Generated referral link:', referralLink);
      return referralLink;
    } catch (error: any) {
      console.error('Referral link generation failed:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
        config: {
          url: error.config?.url,
          method: error.config?.method,
          headers: error.config?.headers
        }
      });
      
      // Fallback: Create a mock referral link for testing
      console.log('Creating fallback referral link for testing...');
      const fallbackCode = `FAZI${Date.now().toString().slice(-6)}`;
      const fallbackLink = {
        code: fallbackCode,
        url: `${getWebAppUrl()}/referral?code=${fallbackCode}`,
        shareCount: 0,
        createdAt: new Date().toISOString(),
      };
      
      console.log('Fallback referral link created:', fallbackLink);
      return fallbackLink;
    }
  },

  async shareReferralLink(code: string): Promise<void> {
    if (!code) {
      console.log('Cannot track share event: referral code is undefined');
      return;
    }
    
    try {
      // Try the share endpoint first
      await apiClient.post('/referrals/share', { code });
      console.log('Share event tracked successfully for code:', code);
    } catch (error: any) {
      // If share endpoint doesn't exist, try alternative endpoints
      if (error.response?.status === 404) {
        try {
          // Try updating referral stats instead
          await apiClient.patch(`/referrals/${code}/share`);
          console.log('Share event tracked via stats update for code:', code);
        } catch (statsError: any) {
          console.log('Share tracking not available - logging locally:', {
            code,
            originalError: error.response?.status,
            statsError: statsError.response?.status
          });
          // Log share event locally as fallback
          console.log(`Referral link shared: ${code} at ${new Date().toISOString()}`);
        }
      } else {
        // Log the full error for debugging
        console.log('Failed to track share event:', {
          code,
          status: error.response?.status,
          message: error.response?.data?.message || error.message,
          endpoint: '/referrals/share'
        });
      }
      
      // Don't throw error for share tracking failures - this is non-critical
      // The share functionality should still work even if tracking fails
    }
  },
};
