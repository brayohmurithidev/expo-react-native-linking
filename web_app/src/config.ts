// Environment configuration for web app
export const config = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://aara-api.fazilabs.com/api',
  WEB_APP_URL: import.meta.env.VITE_WEB_APP_URL || 'https://expo-react-native-linking.vercel.app',
  APP_PACKAGE_ID: 'com.fazitech.exporeferallinking',
} as const;
