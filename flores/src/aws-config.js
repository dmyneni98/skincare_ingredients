import { Amplify } from 'aws-amplify';

// Replace these with your real Cognito values when ready (or use EXPO_PUBLIC_* env vars)
const region = process.env.EXPO_PUBLIC_AWS_REGION || 'YOUR_REGION';
const userPoolId = process.env.EXPO_PUBLIC_USER_POOL_ID || 'YOUR_USER_POOL_ID';
const userPoolWebClientId = process.env.EXPO_PUBLIC_USER_POOL_WEB_CLIENT_ID || 'YOUR_USER_POOL_WEB_CLIENT_ID';

const isPlaceholder = (val) => !val || val.startsWith('YOUR_');

if (!isPlaceholder(region) && !isPlaceholder(userPoolId) && !isPlaceholder(userPoolWebClientId)) {
  try {
    Amplify.configure({
      Auth: { region, userPoolId, userPoolWebClientId },
    });
  } catch (e) {
    // Avoid crash if config is invalid
  }
}

export default Amplify; 