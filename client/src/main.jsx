import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { App as CapacitorApp } from '@capacitor/app'

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
