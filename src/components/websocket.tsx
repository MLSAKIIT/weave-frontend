"use client";

import { useState, useEffect, useRef } from "react";

const WEBSOCKET_URL = "ws://localhost:3000/ws";


function createWebSocket(onMessage: (event: MessageEvent) => void): WebSocket {
    const ws = new WebSocket(WEBSOCKET_URL);

    ws.onopen = () => {
        console.log("Connected to WebSocket");
    };

    ws.onmessage = onMessage;

    ws.onerror = (error) => {
        console.error("WebSocket Error:", error);
    };

    ws.onclose = () => {
        console.log("WebSocket Disconnected!");
    };

    return ws;
}

const WebSocketComponent = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const wsRef = useRef<WebSocket | null>(null);

    useEffect(() => {

        wsRef.current = createWebSocket((event: MessageEvent) => {
            console.log("Message from server:", event.data);
            setMessages((prev) => [...prev, event.data]);
        });


        return () => {
            if (wsRef.current) {
                wsRef.current.close();
            }
        };
    }, []);

    const sendMessage = () => {
        if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
            wsRef.current.send("Hello from client!");
        } else {
            console.log("WebSocket not open.");
        }
    };

    return (
        <div className="p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-bold">WebSocket Messages</h2>
            <button
                onClick={sendMessage}
                className="px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
                Send Message
            </button>
            <div className="mt-4">
                {messages.map((msg, index) => (
                    <p key={index} className="p-2 bg-gray-100 rounded-md text-black">
                        {msg}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default WebSocketComponent;
