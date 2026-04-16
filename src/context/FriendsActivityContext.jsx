import React, { useState } from "react";
import { createContext } from "react";
import CallIcon from '../assets/call.png';
import TextIcon from "../assets/text.png";
import VideoIcon from "../assets/video.png";

export const ActivityContext = createContext();

const FriendsActivityContext = ({ children }) => {
  const [FriendsActivity, setFriendsActivity] = useState([]);


  console.log(CallIcon, VideoIcon,TextIcon)

  // handle call btn
  const handleCallBtn = (findFriendData) => {
    const newDate = new Date();
    const formattedDate = newDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    const AudioCallData = {
      ...findFriendData,
      time: formattedDate,
      type: "AudioCall",
      icon: CallIcon,
    };

    setFriendsActivity([...FriendsActivity, AudioCallData]);
  };

  // handle text btn
  const handleTextBtn = (findFriendData) => {
    const newDate = new Date();
    const formattedDate = newDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    const TextData = {
      ...findFriendData,
      time: formattedDate,
      type: "TextMessage",
      icon: TextIcon,
    };

    setFriendsActivity([...FriendsActivity, TextData]);
  };

  // handle video btn
  const handleVideoBtn = (findFriendData) => {
    const newDate = new Date();
    const formattedDate = newDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    const videoCallData = {
      ...findFriendData,
      time: formattedDate,
      type: "videoCall",
      icon: VideoIcon,
    };

    setFriendsActivity([...FriendsActivity, videoCallData]);
  };

  const FriendsActivityData = {
    FriendsActivity,
    handleCallBtn,
    handleTextBtn,
    handleVideoBtn,
  };

  return (
    <ActivityContext.Provider value={FriendsActivityData}>
      {children}
    </ActivityContext.Provider>
  );
};

export default FriendsActivityContext;
