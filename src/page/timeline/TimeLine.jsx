import { MdKeyboardArrowDown } from "react-icons/md";
import { TbMessageCircle } from "react-icons/tb";
import { ActivityContext } from "../../context/FriendsActivityContext";
import { useContext } from "react";
import HistoryCard from "./HistoryCard";

const TimeLine = () => {

 const { FriendsActivity } =
    useContext(ActivityContext);


  return (
    <div className="mx-5 xl:mx-0">
      <div className="mt-20 w-full max-w-277.5 mx-auto">
        <div className="mb-6">
          <h2 className="font-bold text-[#1F2937] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6">
            Timeline
          </h2>
          <div className="lg:flex items-center justify-between">
            <div className="mb-6">
              <div className="dropdown dropdown-start">
                <div tabIndex={0} role="button" className="btn m-1">
                  <p className="flex items-center gap-1 text-[#64748B] text-lg">
                    Filter timeline <MdKeyboardArrowDown />
                  </p>
                </div>
                <ul
                  tabIndex="-1"
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <a>Call</a>
                  </li>
                  <li>
                    <a>Text</a>
                  </li>
                  <li>
                    <a>Video</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
              <label className="input">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input type="search" required placeholder="Search" />
              </label>
            </div>
          </div>
        </div>
        {FriendsActivity.map((friend, index) => {
          if (friend.type === "AudioCall") {
            return <HistoryCard key={index} friend={friend} />;
          } else if (friend.type === "TextMessage") {
            return <HistoryCard key={index} friend={friend} />;
          } else if (friend.type === "videoCall") {
            return <HistoryCard key={index} friend={friend} />;
          }
        })}
      </div>
    </div>
  );
};

export default TimeLine;
