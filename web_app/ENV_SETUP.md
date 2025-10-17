# Environment Variables Setup

## Required Environment Variables

Create a `.env` file in the `web_app` directory with the following variables:

```bash
# API Configuration
VITE_API_BASE_URL=https://aara-api.fazilabs.com/api

# Web App Configuration  
VITE_WEB_APP_URL=https://expo-react-native-linking.vercel.app
```

## Usage

The web app uses these environment variables for:

- **VITE_API_BASE_URL**: Base URL for API calls (if needed for future features)
- **VITE_WEB_APP_URL**: Base URL for generating referral links
- **APP_PACKAGE_ID**: Android package ID for Play Store links

## Development

For local development, you can override these values in your `.env` file:

```bash
VITE_WEB_APP_URL=http://localhost:3000
```

## Production

In production (Vercel), set these environment variables in your Vercel dashboard or use the default values defined in `src/config.ts`.
