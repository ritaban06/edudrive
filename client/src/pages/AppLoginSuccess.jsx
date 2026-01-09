import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Loader2, XCircle } from 'lucide-react';
import { handleOAuthCallback } from '../utils/googleOAuthRedirect';
import { authAPI } from '../api';

/**
 * OAuth Success Page
 * Handles the redirect after successful Google OAuth login
 * Works for both web and Capacitor Android
 */
const AppLoginSuccess = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState('processing'); // processing, success, error
  const [error, setError] = useState('');

  // Ensure the body uses the same purple gradient while this page is visible
  useEffect(() => {
    const prevBackground = document.body.style.background || '';
    const prevBackgroundImage = document.body.style.backgroundImage || '';
    const prevBackgroundColor = document.body.style.backgroundColor || '';

    document.body.style.background = 'linear-gradient(135deg, #1b0b42 0%, #24125a 50%, #2d176b 100%)';
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = 'transparent';

    return () => {
      document.body.style.background = prevBackground;
      document.body.style.backgroundImage = prevBackgroundImage;
      document.body.style.backgroundColor = prevBackgroundColor;
    };
  }, []);

  useEffect(() => {
    const processCallback = async () => {
      try {
        const result = handleOAuthCallback();

        if (result.success) {
          // Store token in localStorage
          localStorage.setItem('authToken', result.token);
          localStorage.setItem('token', result.token);
          
          // Fetch user profile from backend using the token
          try {
            const response = await authAPI.getProfile();
            if (response.data.user) {
              localStorage.setItem('user', JSON.stringify(response.data.user));
              console.log('User profile fetched:', response.data.user);
            }
          } catch (apiError) {
            console.error('Failed to fetch user profile:', apiError);
            // Check if user_info exists in cookie as fallback
            const userStr = localStorage.getItem('user');
            if (!userStr) {
              console.warn('No user info available, login may fail');
            }
          }

          setStatus('success');
          
          // Force page reload to reinitialize auth context
          setTimeout(() => {
            window.location.href = '/dashboard';
          }, 1500);
        } else {
          setStatus('error');
          setError(result.error || 'Authentication failed');
          
          // Redirect to login after 3 seconds
          setTimeout(() => {
            navigate('/login');
          }, 3000);
        }
      } catch (err) {
        console.error('OAuth callback processing error:', err);
        setStatus('error');
        setError('Failed to process authentication');
        
        // Redirect to login after 3 seconds
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      }
    };

    processCallback();
  }, [navigate]);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#1b0b42] via-[#24125a] to-[#2d176b] flex items-center justify-center p-4"
      style={{ background: 'linear-gradient(135deg, #1b0b42 0%, #24125a 50%, #2d176b 100%)' }}
    >
      <div className="bg-[rgba(255,255,255,0.06)] backdrop-blur-md rounded-2xl shadow-2xl p-8 max-w-md w-full text-center border border-[rgba(255,255,255,0.15)]">
        {status === 'processing' && (
          <>
            <Loader2 className="h-16 w-16 text-purple-400 animate-spin mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">
              Completing Sign In...
            </h2>
            <p className="text-white/80">
              Please wait while we authenticate your account
            </p>
          </>
        )}

        {status === 'success' && (
          <>
            <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">
              Success!
            </h2>
            <p className="text-white/80">
              You've been signed in successfully. Redirecting to dashboard...
            </p>
          </>
        )}

        {status === 'error' && (
          <>
            <XCircle className="h-16 w-16 text-red-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">
              Authentication Failed
            </h2>
            <p className="text-red-400 mb-4">
              {error}
            </p>
            <p className="text-white/60 text-sm">
              Redirecting to login page...
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AppLoginSuccess;
