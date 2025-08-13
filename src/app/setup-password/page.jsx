"use client";
import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaCopy, FaCheck, FaShieldAlt, FaKey } from 'react-icons/fa';

const SetupPassword = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [hashedPassword, setHashedPassword] = useState('');
  const [validation, setValidation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generatePassword = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/setup-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'generate' })
      });
      
      const data = await response.json();
      if (data.success) {
        setGeneratedPassword(data.password);
        setHashedPassword(data.hashedPassword);
        setPassword(data.password);
      }
    } catch (error) {
      console.error('Error generating password:', error);
    } finally {
      setLoading(false);
    }
  };

  const validatePassword = async () => {
    if (!password) return;
    
    setLoading(true);
    try {
      const response = await fetch('/api/setup-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, action: 'validate' })
      });
      
      const data = await response.json();
      if (data.success) {
        setValidation(data);
      }
    } catch (error) {
      console.error('Error validating password:', error);
    } finally {
      setLoading(false);
    }
  };

  const hashPassword = async () => {
    if (!password) return;
    
    setLoading(true);
    try {
      const response = await fetch('/api/setup-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, action: 'hash' })
      });
      
      const data = await response.json();
      if (data.success) {
        setHashedPassword(data.hashedPassword);
      } else {
        setValidation(data);
      }
    } catch (error) {
      console.error('Error hashing password:', error);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">🔐 Password Setup</h1>
          <p className="text-gray-400 text-lg">
            Secure your dashboard with encrypted password authentication
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Password Generator */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FaKey className="text-blue-400" />
              Generate Secure Password
            </h2>
            <p className="text-gray-400 mb-4">
              Generate a cryptographically secure password for your dashboard
            </p>
            
            <button
              onClick={generatePassword}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-medium py-3 px-4 rounded-lg mb-4"
            >
              {loading ? 'Generating...' : 'Generate Secure Password'}
            </button>

            {generatedPassword && (
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Generated Password:</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={generatedPassword}
                      readOnly
                      className="flex-1 p-3 bg-gray-700 border border-gray-600 rounded-lg text-white font-mono"
                    />
                    <button
                      onClick={() => copyToClipboard(generatedPassword)}
                      className="p-3 bg-gray-600 hover:bg-gray-500 rounded-lg"
                      title="Copy password"
                    >
                      {copied ? <FaCheck className="text-green-400" /> : <FaCopy />}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Password Validator */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FaShieldAlt className="text-green-400" />
              Validate Password
            </h2>
            <p className="text-gray-400 mb-4">
              Check if your password meets security requirements
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Your Password:</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 pr-12 bg-gray-700 border border-gray-600 rounded-lg text-white"
                    placeholder="Enter your password"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={validatePassword}
                  disabled={loading || !password}
                  className="flex-1 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white font-medium py-3 px-4 rounded-lg"
                >
                  {loading ? 'Validating...' : 'Validate'}
                </button>
                <button
                  onClick={hashPassword}
                  disabled={loading || !password}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-medium py-3 px-4 rounded-lg"
                >
                  {loading ? 'Hashing...' : 'Hash Password'}
                </button>
              </div>
            </div>

            {validation && (
              <div className="mt-4">
                {validation.isValid ? (
                  <div className="bg-green-900/20 border border-green-500/20 rounded-lg p-4">
                    <p className="text-green-400 font-medium">✅ {validation.message}</p>
                  </div>
                ) : (
                  <div className="bg-red-900/20 border border-red-500/20 rounded-lg p-4">
                    <p className="text-red-400 font-medium">❌ {validation.message}</p>
                    <ul className="mt-2 space-y-1">
                      {validation.errors?.map((error, index) => (
                        <li key={index} className="text-red-300 text-sm">• {error}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Hashed Password Display */}
        {hashedPassword && (
          <div className="mt-8 bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">🔒 Hashed Password</h2>
            <p className="text-gray-400 mb-4">
              Copy this hashed password to your <code className="bg-gray-700 px-2 py-1 rounded">.env.local</code> file
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Environment Variable:</label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={`HASHED_ADMIN_PASSWORD=${hashedPassword}`}
                    readOnly
                    className="flex-1 p-3 bg-gray-700 border border-gray-600 rounded-lg text-white font-mono text-sm"
                  />
                  <button
                    onClick={() => copyToClipboard(`HASHED_ADMIN_PASSWORD=${hashedPassword}`)}
                    className="p-3 bg-gray-600 hover:bg-gray-500 rounded-lg"
                    title="Copy to clipboard"
                  >
                    {copied ? <FaCheck className="text-green-400" /> : <FaCopy />}
                  </button>
                </div>
              </div>
              
              <div className="bg-blue-900/20 border border-blue-500/20 rounded-lg p-4">
                <h3 className="text-blue-400 font-medium mb-2">📝 Setup Instructions:</h3>
                <ol className="text-blue-300 text-sm space-y-1">
                  <li>1. Copy the hashed password above</li>
                  <li>2. Create or edit your <code className="bg-gray-700 px-1 rounded">.env.local</code> file</li>
                  <li>3. Add the line: <code className="bg-gray-700 px-1 rounded">HASHED_ADMIN_PASSWORD=your_hashed_password</code></li>
                  <li>4. Restart your development server</li>
                  <li>5. Use your original password to log into the dashboard</li>
                </ol>
              </div>
            </div>
          </div>
        )}

        {/* Security Features */}
        <div className="mt-8 bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">🛡️ Security Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-green-400">✅ Implemented:</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• bcrypt password hashing (12 salt rounds)</li>
                <li>• Password strength validation</li>
                <li>• Secure random password generation</li>
                <li>• No plain text password storage</li>
                <li>• Brute force protection</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-blue-400">🔧 Requirements:</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Minimum 8 characters</li>
                <li>• At least one lowercase letter</li>
                <li>• At least one uppercase letter</li>
                <li>• At least one number</li>
                <li>• At least one special character</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupPassword;
