'use client';

import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ResetPassword = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const email = searchParams.get('email');
    const router=useRouter()
    const [status, setStatus] = useState('loading');
    const [message, setMessage] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!token || !email) {
            setStatus('error');
            setMessage('Token or email is invalid');
            return;
        }
        setStatus('success');
    }, [token, email]);

    const handlePasswordChange = async () => {
        if (!password || !confirmPassword) {
            setMessage('Please enter both passwords.');
            return;
        }
        if (password !== confirmPassword) {
            setMessage('Passwords do not match.');
            return;
        }

        setLoading(true);
        try {
            const res = await axios.post('http://localhost:3000/api/v1/auth/reset-password', {
                token,
                newPassword: password,
                confirmPassword
            });
            setMessage(res.data.message);
            setStatus('success');
            router.push('/login')
        } catch (err) {
            setStatus('error');
            setMessage('Something went wrong.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden">
            {/* Blurred Background Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[hsla(28,97%,46%,0.4)] rounded-full blur-[80px]" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[hsla(28,97%,46%,0.4)] rounded-full blur-[80px]" />

            {/* Reset Password Container */}
            <div className="bg-[hsla(229,41%,11%,0.4)] backdrop-blur-lg shadow-lg flex flex-col items-center py-12 px-12 w-[22rem] h-[28rem] rounded-2xl justify-center">
                <h1 className="text-2xl font-semibold text-[#E76F04] mb-4">Reset Password</h1>
                {status === 'loading' && <p className="text-[#E76F04]">Loading...</p>}
                {status === 'error' && <p className="text-red-500">{message}</p>}
                {status === 'success' && <p className="text-green-400">{message}</p>}
                {status === 'success' && (
                    <div className="w-full">
                        <input
                            type="password"
                            placeholder="New Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full py-2 bg-transparent border-b border-b-[#E76F04] text-white focus:outline-none placeholder:text-[#E76F04] mb-4"
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full py-2 bg-transparent border-b border-b-[#E76F04] text-white focus:outline-none placeholder:text-[#E76F04] mb-4"
                        />
                        <button
                            onClick={handlePasswordChange}
                            disabled={loading}
                            className="w-full py-2 bg-[#E76F04] text-black rounded-[5px] hover:opacity-90"
                        >
                            {loading ? 'Processing...' : 'Reset Password'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ResetPassword;