'use client'

import axios from 'axios';
import React, { useState } from 'react'

const Page = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState('')
    const handleSendEmail = async() => {
        if (!email) {
            setMessage('Email cannot be empty')
            return
        }
        try{
            const res=await axios.post('http://localhost:3000/api/v1/user/forgot-password',
                {
                    email
                },{
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    withCredentials:true
                }
            )
            setMessage(res.data.message);
            alert(message)
        }catch{
            setMessage('Error')
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
            <h1 className="text-2xl font-bold mb-4">Enter Your Email</h1>
            <input
                type="email"
                placeholder="Enter your email"
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full max-w-md p-2 mb-4 bg-gray-800 text-white border border-gray-700 rounded"
            />
            <button
                onClick={handleSendEmail}
                className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
            >
                Send Reset Link
            </button>
        </div>
    );
};

export default Page;
