// Redirect-based Google OAuth utility
// Use this for both web and Capacitor Android apps

import { Capacitor } from '@capacitor/core';

const BACKEND_URL = import.meta.env.VITE_API_URL?.replace('/api', '') || 'http://localhost:5000';

/**
 * Initiates Google OAuth redirect flow
 * This works for both web browsers and Capacitor apps
 * Capacitor will automatically open the system browser (Chrome)
 */
export const initiateGoogleOAuth = () => {
  // Detect if running in Capacitor Android app
  const isNative = Capacitor.isNativePlatform();
  const platform = Capacitor.getPlatform(); // 'android', 'ios', or 'web'
  
  // Add platform parameter to OAuth URL so backend knows where to redirect
  const oauthUrl = `${BACKEND_URL}/api/auth/google?platform=${platform}`;
  
  // Redirect to backend OAuth endpoint
  window.location.href = oauthUrl;
};

/**
 * Checks if the current page is the OAuth callback success page
 * and retrieves the token from URL parameters
 */
export const handleOAuthCallback = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');
  const error = urlParams.get('error');

  if (error) {
    console.error('OAuth error:', error);
    return { success: false, error: decodeURIComponent(error) };
  }

  if (token) {
    // Store token in localStorage with correct key
    localStorage.setItem('authToken', token);
    localStorage.setItem('token', token); // Fallback for compatibility
    
    // Also check cookies for user info
    const userInfo = getCookie('user_info');
    if (userInfo) {
      try {
        const user = JSON.parse(userInfo);
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.error('Failed to parse user info:', e);
      }
    }

    return { success: true, token };
  }

  return { success: false, error: 'No token received' };
};

/**
 * Helper function to get cookie value by name
 * Decodes URL-encoded cookie values
 */
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const cookieValue = parts.pop().split(';').shift();
    try {
      // Decode URL-encoded cookie value
      return decodeURIComponent(cookieValue);
    } catch (e) {
      console.error('Failed to decode cookie:', e);
      return cookieValue;
    }
  }
  return null;
};

/**
 * Checks authentication status from cookies and localStorage
 */
export const checkAuthStatus = () => {
  const token = localStorage.getItem('token') || getCookie('auth_token');
  const userStr = localStorage.getItem('user') || getCookie('user_info');
  
  if (token && userStr) {
    try {
      const user = typeof userStr === 'string' ? JSON.parse(userStr) : userStr;
      return { authenticated: true, token, user };
    } catch (e) {
      console.error('Failed to parse user data:', e);
      return { authenticated: false };
    }
  }
  
  return { authenticated: false };
};
