import React, { useEffect, useState } from "react";
import { createContext } from "react";
import CallIcon from "../assets/call.png";
import TextIcon from "../assets/text.png";
import VideoIcon from "../assets/video.png";
import toast, { Toaster } from "react-hot-toast";

export const ActivityContext = createContext();

const FriendsActivityContext = ({ children }) => {
  // get data in localstorage
  const loadFromLocalstorage = (key, defaultValue) => {
    const saveData = localStorage.getItem(key);
    if (saveData) {
      return JSON.parse(saveData);
    }
    return defaultValue;
  };

  // create state using localstorage
  const [FriendsActivity, setFriendsActivity] = useState(() =>
    loadFromLocalstorage("FriendsActivity", []),
  );

  console.log(FriendsActivity, "is array");

  // set data in localstorage
  useEffect(() => {
    localStorage.setItem("FriendsActivity", JSON.stringify(FriendsActivity));
  }, [FriendsActivity]);

  // handle call btn
  const handleCallBtn = (findFriendData) => {
    const newDate = new Date();
    const formattedDate = newDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const AudioCallData = {
      ...findFriendData,
      time: formattedDate,
      type: "AudioCall",
      icon: CallIcon,
    };

    setFriendsActivity([...FriendsActivity, AudioCallData]);
    toast.success(
      <p className="font-medium flex items-center gap-1">
        {AudioCallData.type}{" "}
        <span className="font-normal text-gray-500">
          with {AudioCallData.name}
        </span>{" "}
      </p>,
    );
  };

  // handle text btn
  const handleTextBtn = (findFriendData) => {
    const newDate = new Date();
    const formattedDate = newDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const TextData = {
      ...findFriendData,
      time: formattedDate,
      type: "TextMessage",
      icon: TextIcon,
    };

    setFriendsActivity([...FriendsActivity, TextData]);
    toast.success(
      <p className="font-medium flex items-center gap-1">
        {TextData.type}{" "}
        <span className="font-normal text-gray-500">
          with {TextData.name}
        </span>{" "}
      </p>,
    );
  };

  // handle video btn
  const handleVideoBtn = (findFriendData) => {
    const newDate = new Date();
    const formattedDate = newDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const videoCallData = {
      ...findFriendData,
      time: formattedDate,
      type: "VideoCall",
      icon: VideoIcon,
    };

    setFriendsActivity([...FriendsActivity, videoCallData]);
    toast.success(
      <p className="font-medium flex items-center gap-1">
        {videoCallData.type}{" "}
        <span className="font-normal text-gray-500">
          with {videoCallData.name}
        </span>{" "}
      </p>,
    );
  };

  console.log(FriendsActivity);

  const FriendsActivityData = {
    FriendsActivity,
    handleCallBtn,
    handleTextBtn,
    handleVideoBtn,
  };

  return (
    <ActivityContext.Provider value={FriendsActivityData}>
      {children}
      <Toaster />
    </ActivityContext.Provider>
  );
};

export default FriendsActivityContext;
