'use client'

import axios from 'axios'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const email = searchParams.get("email");

    const [status, setStatus] = useState("loading");
    const [message, setMessage] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!token || !email) {
            setStatus("error");
            setMessage("Token or email is invalid");
            return;
        }
        setStatus("success");
    }, [token, email]);

    const handlePasswordChange = async () => {
        if (!password || !confirmPassword) {
            setMessage("Please enter both passwords.");
            return;
        }
        if (password !== confirmPassword) {
            setMessage("Passwords do not match.");
            return;
        }

        setLoading(true);
        try {
            const res = await axios.post("http://localhost:3000/api/v1/auth/reset-password", {
                token,
                newPassword: password,
                confirmPassword
            })

            setMessage(res.data.message);
            setStatus("success");
        } catch (err) {
            setStatus("error");
            setMessage("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
            <h1 className="text-2xl font-bold mb-4">Reset Password</h1>
            
            {status === "loading" && <p>Loading...</p>}
            {status === "error" && <p className="text-red-500">{message}</p>}
            {status === "success" && <p className="text-green-500">{message}</p>}

            {status === "success" && (
                <div className="w-full max-w-md">
                    <input
                        type="password"
                        placeholder="New Password"
                        name='newPassword'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 mb-2 bg-gray-800 text-white border border-gray-700 rounded"
                    />
                    <input
                        type="password"
                        name='confirmPassword'
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full p-2 mb-4 bg-gray-800 text-white border border-gray-700 rounded"
                    />
                    <button
                        onClick={handlePasswordChange}
                        disabled={loading}
                        className="w-full px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 disabled:bg-gray-600"
                    >
                        {loading ? "Processing..." : "Reset Password"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Page;
