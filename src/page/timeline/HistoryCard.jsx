import React from 'react';
import TextIcon from "../../assets/text.png";
const HistoryCard = ({ friend }) => {

  return (
    <div>
      <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm mb-6">
        <div className="">
          <img src={friend.icon} alt={friend.name} />
        </div>
        <div className="">
          <p className="mb-1 flex  gap-1 items-center text-xl font-medium text-[#244D3F] ">
            {friend.type}
            <span className="text-lg  text-[#64748B] font-normal">
              {friend.name}
            </span>
          </p>
          <p className="font-medium text-[#64748B]">{friend.time}</p>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;