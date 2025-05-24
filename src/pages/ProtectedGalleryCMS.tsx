// src/pages/ProtectedGalleryCMS.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GalleryCMS from './GalleryCMS';

const ProtectedGalleryCMS: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Change this password to something secure for your team
    const ADMIN_PASSWORD = 'VentyAdmin2025!';

    const handleLogin = () => {
        setIsLoading(true);

        // Simulate a small delay for security
        setTimeout(() => {
            if (password === ADMIN_PASSWORD) {
                setIsAuthenticated(true);
                localStorage.setItem('cms_authenticated', 'true');
            } else {
                alert('Incorrect password');
                setPassword('');
            }
            setIsLoading(false);
        }, 500);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('cms_authenticated');
        setPassword('');
    };

    // Check if already authenticated on component mount
    React.useEffect(() => {
        const isAuth = localStorage.getItem('cms_authenticated') === 'true';
        setIsAuthenticated(isAuth);
    }, []);

    if (isAuthenticated) {
        return (
            <div>
                {/* Logout button overlay */}
                <div className="fixed top-4 right-4 z-50">
                    <div className="flex gap-2">
                        <Link
                            to="/"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                        >
                            ← Back to Site
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                        >
                            Logout
                        </button>
                    </div>
                </div>
                <GalleryCMS />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
            <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full shadow-2xl">
                <div className="text-center mb-8">
                    <img
                        src="https://i.ibb.co/rRtvhsGK/Venty-Logo.png"
                        alt="VENTY Roleplay"
                        className="h-16 mx-auto mb-4"
                    />
                    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-2">
                        Gallery CMS Access
                    </h2>
                    <p className="text-gray-400 text-sm">
                        Enter admin password to manage gallery images
                    </p>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Admin Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none transition-colors"
                            onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleLogin()}
                            disabled={isLoading}
                        />
                    </div>

                    <button
                        onClick={handleLogin}
                        disabled={isLoading || !password.trim()}
                        className="w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                    >
                        {isLoading ? 'Authenticating...' : 'Access CMS'}
                    </button>

                    <div className="text-center pt-4">
                        <Link
                            to="/"
                            className="text-gray-400 hover:text-gray-300 transition-colors text-sm"
                        >
                            ← Back to VENTY Roleplay
                        </Link>
                    </div>
                </div>

                {/* Security notice */}
                <div className="mt-8 p-4 bg-yellow-900/20 border border-yellow-600/30 rounded-lg">
                    <p className="text-yellow-400 text-xs text-center">
                        🔒 This area is restricted to authorized administrators only
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProtectedGalleryCMS;