import React from "react";
import useFetchData from "../../hooks/useFetchData";
import FriendsCard from "../friendsComponents/FriendsCard";
import { RingLoader } from "react-spinners";

const FriendsSection = () => {
  const { loading, friendsData = [] } = useFetchData();
  if (!friendsData) return;
  const onTrack = friendsData.filter((friend) => friend.status === "on-track");
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <RingLoader />
      </div>
    );
  }

  return (
    <div className="mx-5 xl:mx-0">
      <div className="w-full   max-w-277.5 mx-auto mb-20">
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white text-white text-center p-7.5 rounded-lg shadow-sm">
            <h3 className="text-[32px] text-[#244D3F] font-semibold mb-2">
              {friendsData.length}
            </h3>{" "}
            <p className="text-[#64748B] text-lg">Total Friends</p>
          </div>
          <div className="bg-white text-white text-center p-7.5 rounded-lg shadow-sm">
            <h3 className="text-[32px] text-[#244D3F] font-semibold mb-2">
              {onTrack.length}
            </h3>{" "}
            <p className="text-[#64748B] text-lg">On Track</p>
          </div>
          <div className="bg-white text-white text-center p-7.5 rounded-lg shadow-sm">
            <h3 className="text-[32px] text-[#244D3F] font-semibold mb-2">6</h3>{" "}
            <p className="text-[#64748B] text-lg">Need Attention</p>
          </div>
          <div className="bg-white text-white text-center p-7.5 rounded-lg shadow-sm">
            <h3 className="text-[32px] text-[#244D3F] font-semibold mb-2">7</h3>{" "}
            <p className="text-[#64748B] text-lg">Interactions This Month</p>
          </div>
        </div>
        <div className="border-b my-10 border-black/5"></div>
        <h3 className="mb-4 font-semibold text-2xl text-[#1F2937]">
          Your Friends
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {friendsData.map((friend) => (
            <FriendsCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendsSection;
