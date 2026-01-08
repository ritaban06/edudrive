import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Loader2, XCircle } from 'lucide-react';
import { handleOAuthCallback } from '../utils/googleOAuthRedirect';
import { useAuth } from '../contexts/AuthContext';

/**
 * OAuth Success Page
 * Handles the redirect after successful Google OAuth login
 * Works for both web and Capacitor Android
 */
const AppLoginSuccess = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [status, setStatus] = useState('processing'); // processing, success, error
  const [error, setError] = useState('');

  useEffect(() => {
    const processCallback = async () => {
      try {
        const result = handleOAuthCallback();

        if (result.success) {
          // Store token in localStorage
          localStorage.setItem('authToken', result.token);
          
          // Get user info from cookie or localStorage
          const userStr = localStorage.getItem('user');
          if (userStr) {
            try {
              const user = JSON.parse(userStr);
              console.log('User info found:', user);
            } catch (e) {
              console.error('Failed to parse user info:', e);
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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        {status === 'processing' && (
          <>
            <Loader2 className="h-16 w-16 text-blue-600 animate-spin mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Completing Sign In...
            </h2>
            <p className="text-gray-600">
              Please wait while we authenticate your account
            </p>
          </>
        )}

        {status === 'success' && (
          <>
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Success!
            </h2>
            <p className="text-gray-600">
              You've been signed in successfully. Redirecting to dashboard...
            </p>
          </>
        )}

        {status === 'error' && (
          <>
            <XCircle className="h-16 w-16 text-red-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Authentication Failed
            </h2>
            <p className="text-red-600 mb-4">
              {error}
            </p>
            <p className="text-gray-600 text-sm">
              Redirecting to login page...
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AppLoginSuccess;
