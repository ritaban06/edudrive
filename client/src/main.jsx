import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { App as CapacitorApp } from '@capacitor/app'
import { Capacitor } from '@capacitor/core'

// Redirect Android browsers to GitHub repo (but not the Capacitor app or iOS devices)
const isAndroidBrowser = () => {
  const ua = navigator.userAgent;
  // Check if it's an Android device
  const isAndroid = /Android/i.test(ua);
  // Check if NOT running in Capacitor (native app)
  const isNativeApp = Capacitor.isNativePlatform();
  // Only redirect Android browsers, allow iOS to access the website
  return isAndroid && !isNativeApp;
};

if (isAndroidBrowser()) {
  // Redirect to GitHub repo for Android app download
  window.location.href = 'https://github.com/ritaban06/edudrive/releases';
} else {
  // Handle deep links for OAuth callback
  CapacitorApp.addListener('appUrlOpen', (data) => {
    console.log('Deep link opened:', data.url);
    
    // Check if this is our OAuth callback
    if (data.url.startsWith('edudrive://app-login-success')) {
      // Extract the path and query parameters
      const url = new URL(data.url);
      const path = url.pathname || '/app-login-success';
      const search = url.search;
      
      // Navigate to the callback page with the token
      window.location.href = `${path}${search}`;
    }
  });

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
