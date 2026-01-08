import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { App as CapacitorApp } from '@capacitor/app'
import { Capacitor } from '@capacitor/core'

// Redirect mobile browsers to GitHub repo (but not the Capacitor app)
const isMobileBrowser = () => {
  const ua = navigator.userAgent;
  // Check if it's a mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
  // Check if NOT running in Capacitor (native app)
  const isNativeApp = Capacitor.isNativePlatform();
  return isMobile && !isNativeApp;
};

if (isMobileBrowser()) {
  // Redirect to GitHub repo
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
