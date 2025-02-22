'use client';
import React, { useState } from 'react';
import { FaMicrophone, FaMicrophoneSlash, FaVideo, FaVideoSlash, FaDesktop, 
         FaComments, FaUserPlus, FaPhoneSlash } from 'react-icons/fa';

const MeetingRoom = () => {
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);
  const [isSharing, setIsSharing] = useState(false);

  const participants = Array(10).fill(null).map((_, i) => ({
    id: i,
    name: `User ${i + 1}`,
    isSpeaking: i === 2,
  }));

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      {/* Meeting Grid */}
      <div className="flex-1 p-4 grid grid-cols-4 gap-2">
        {participants.map((participant) => (
          <div
            key={participant.id}
            className={`relative bg-[#0E1224] rounded-lg flex items-center justify-center
              ${participant.isSpeaking ? 'ring-2 ring-[#E76F04]' : ''}`}
          >
            <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center">
              <span className="text-xl">{participant.name[0]}</span>
            </div>
            <span className="absolute bottom-2 left-2 text-sm">{participant.name}</span>
          </div>
        ))}
        <div className="bg-[#0E1224] rounded-lg flex items-center justify-center">
          <span className="text-lg">+12</span>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="bg-[#0E1224] p-4">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          {/* Left Section */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">Class meeting</span>
            <span className="text-sm text-gray-400">•</span>
            <span className="text-sm text-gray-400">1:23:45</span>
          </div>

          {/* Center Controls */}
          <div className="flex gap-4">
            <button
              onClick={() => setMicOn(!micOn)}
              className={`w-12 h-12 flex items-center justify-center rounded-full
                ${micOn ? 'bg-[#E76F04]' : 'bg-red-600'} hover:opacity-90`}
              aria-label={micOn ? "Turn microphone off" : "Turn microphone on"}
            >
              {micOn ? <FaMicrophone size={20} /> : <FaMicrophoneSlash size={20} />}
            </button>

            <button
              onClick={() => setVideoOn(!videoOn)}
              className={`w-12 h-12 flex items-center justify-center rounded-full
                ${videoOn ? 'bg-[#E76F04]' : 'bg-red-600'} hover:opacity-90`}
              aria-label={videoOn ? "Turn camera off" : "Turn camera on"}
            >
              {videoOn ? <FaVideo size={20} /> : <FaVideoSlash size={20} />}
            </button>

            <button
              onClick={() => setIsSharing(!isSharing)}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E76F04] hover:opacity-90"
              aria-label="Share screen"
            >
              <FaDesktop size={20} />
            </button>

            <button
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E76F04] hover:opacity-90"
              aria-label="Open chat"
            >
              <FaComments size={20} />
            </button>

            <button
              className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E76F04] hover:opacity-90"
              aria-label="Add participant"
            >
              <FaUserPlus size={20} />
            </button>

            <button
              className="w-12 h-12 flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700"
              aria-label="Leave meeting"
            >
              <FaPhoneSlash size={20} />
            </button>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-white">
              <span className="sr-only">Show information</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <button className="text-gray-400 hover:text-white">
              <span className="sr-only">Show participants</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
            <button className="text-gray-400 hover:text-white">
              <span className="sr-only">Show chat</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingRoom;