import { ReferralLink } from './types';
import { mockReferralLink, delay } from './mockData';

export const referralApi = {
  async getReferralLink(): Promise<ReferralLink> {
    await delay(600);
    return mockReferralLink;
  },

  async generateReferralLink(): Promise<ReferralLink> {
    await delay(800);
    // In real app, generate new code on server
    return {
      ...mockReferralLink,
      code: 'NEW' + Math.random().toString(36).substr(2, 6).toUpperCase(),
      url: `https://expo-react-native-linking.vercel.app/referral?code=NEW${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
      createdAt: new Date().toISOString(),
    };
  },

  async shareReferralLink(code: string): Promise<void> {
    await delay(300);
    // In real app, track share event
    console.log('Referral link shared:', code);
  },
};
