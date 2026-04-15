import React from "react";
import { Link } from "react-router";

const FriendsCard = ({ friend }) => {
  const { name, picture, days_since_contact, tags, status } = friend || [];

  return (
    <Link to={`/friendDetails/${friend.id}`}>
      <div className="p-6 text-center bg-white shadow-sm rounded-lg">
        <div className="">
          <img
            className="rounded-full w-20 h-20 object-cover mx-auto mb-3"
            src={picture}
            alt={name}
          />
        </div>
        <div className="">
          <h2 className="text-[#1F2937] text-xl font-semibold mb-2">{name}</h2>
          <p className="text-[12px] text-[#64748B] mb-2">
            {days_since_contact}d ago
          </p>
          <div className="flex items-center gap-2 justify-center">
            {tags?.map((tag, index) => (
              <p
                className="bg-[#CBFADB] px-2 py-1.5 rounded-full text-[#244D3F] text-[12px] font-medium mb-2"
                key={index}
              >
                {tag}
              </p>
            ))}
          </div>

          <div className="flex justify-center items-center">
            <p
              className={`${status === "overdue" && "bg-[#EF4444]"} ${status === "on-track" && "bg-[#244D3F]"} ${status === "almost due" && "bg-[#EFAD44]"} text-[12px] font-medium text-white rounded-full px-2 py-1.5 w-fit`}
            >
              {status}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default FriendsCard;
