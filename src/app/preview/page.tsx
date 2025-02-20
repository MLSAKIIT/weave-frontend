"use client";

import { useState } from "react";
import { FaMicrophone, FaMicrophoneSlash, FaVideo, FaVideoSlash, FaUsers, FaTimesCircle } from "react-icons/fa";

const MeetingPreview = () => {
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);

  const handleJoin = () => {
    if (!micOn && !videoOn) {
      alert("Both microphone and camera are off. Do you still want to join?");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black relative star-background text-white p-10">
      <h1 className="text-2xl mb-2">Ready To Join?</h1>
      <p className="text-gray-400 text-sm">zww-123-uew</p>

      {/* Video Preview Box */}
      <div className="mt-6 w-full max-w-3xl h-[350px] bg-[#0E1224] rounded-xl flex items-center justify-center relative">
        {!videoOn && (
          <p className="absolute text-gray-500 text-lg">Camera is off</p>
        )}
        
        {/* Mic & Video Controls */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-6">
          <button
            onClick={() => setMicOn(!micOn)}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E76F04] hover:bg-orange-500"
            aria-label={micOn ? "Turn microphone off" : "Turn microphone on"}
          >
            {micOn ? <FaMicrophone size={20} /> : <FaMicrophoneSlash size={20} />}
          </button>

          <button
            onClick={() => setVideoOn(!videoOn)}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E76F04] hover:bg-orange-500"
            aria-label={videoOn ? "Turn camera off" : "Turn camera on"}
          >
            {videoOn ? <FaVideo size={20} /> : <FaVideoSlash size={20} />}
          </button>
        </div>
      </div>

      {/* Meeting Info */}
      <p className="text-gray-400 text-sm mt-4">21 people are in the meeting</p>

      {/* Join & Cancel Buttons */}
      <div className="flex gap-12 mt-6 w-full justify-center text-lg">
        <button 
          onClick={handleJoin} 
          className="flex items-center px-6 py-4 bg-[#E76F04] hover:bg-orange-500 min-w-[150px] max-w-[250px] w-full sm:w-1/4"
        >
          <FaUsers size={24} className="mr-auto" />
          <span className="flex-grow text-center">Join</span>
        </button>

        <button 
          className="flex items-center px-6 py-4 bg-[#E76F04] hover:bg-orange-500 min-w-[150px] max-w-[250px] w-full sm:w-1/4"
        >
          <FaTimesCircle size={24} className="mr-auto" />
          <span className="flex-grow text-center">Cancel</span>
        </button>
      </div>
    </div>
  );
};

export default MeetingPreview;
