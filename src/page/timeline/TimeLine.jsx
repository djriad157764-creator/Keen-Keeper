import { MdKeyboardArrowDown } from "react-icons/md";
import { TbMessageCircle } from "react-icons/tb";
import { ActivityContext } from "../../context/FriendsActivityContext";
import { useContext, useMemo, useState } from "react";
import HistoryCard from "./HistoryCard";
import { FcSearch } from "react-icons/fc";
import useFetchData from "../../hooks/useFetchData";
import { RingLoader } from "react-spinners";

const TimeLine = () => {
  const { loading } = useFetchData();
  const { FriendsActivity } = useContext(ActivityContext);
  const [sortType, setSortType] = useState("all");

  const sortingData = useMemo(() => {
    if (sortType === "all") {
      return FriendsActivity;
    } else {
      return FriendsActivity.filter((friend) => friend.type === sortType);
    }
  }, [sortType, FriendsActivity]);

if (loading) {
  return (
    <div className="flex justify-center items-center min-h-[50vh]">
      <RingLoader />
    </div>
  );
}

  return (
    <div className="mx-5 xl:mx-0">
      <div className="mt-20 w-full max-w-277.5 mx-auto">
        <div className="mb-6">
          <h2 className="font-bold  text-[#1F2937] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6">
            Timeline
          </h2>
          <div className="lg:flex items-center justify-between">
            <div className="mb-6">
              <div className="dropdown dropdown-start">
                <div tabIndex={0} role="button" className="btn m-1">
                  <p className="flex items-center gap-1 text-[#64748B] font-normal text-lg">
                    Filter timeline <MdKeyboardArrowDown />
                  </p>
                </div>
                <ul
                  tabIndex="-1"
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li onClick={() => setSortType("AudioCall")}>
                    <a>Call</a>
                  </li>
                  <li onClick={() => setSortType("TextMessage")}>
                    <a>Text</a>
                  </li>
                  <li onClick={() => setSortType("videoCall")}>
                    <a>Video</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {sortingData.length === 0 ?
          <div className="text-center py-16 bg-gray-50 rounded-lg">
            <div className="text-6xl mb-4 flex items-center justify-center">
              <FcSearch />
            </div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              No History Found
            </h2>
            <p className="text-gray-500">
              {sortType === "all" ?
                "No activities found"
              : `No ${
                  sortType === "AudioCall" ? "Call"
                  : sortType === "TextMessage" ? "Text"
                  : "Video"
                } activities yet`
              }
            </p>
            {sortType !== "all" && (
              <button
                onClick={() => setSortType("all")}
                className="btn btn-sm btn-outline mt-4"
              >
                View All Activities
              </button>
            )}
          </div>
        : sortingData.map((friend, index) => {
            if (friend.type === "AudioCall") {
              return <HistoryCard key={index} friend={friend} />;
            } else if (friend.type === "TextMessage") {
              return <HistoryCard key={index} friend={friend} />;
            } else if (friend.type === "videoCall") {
              return <HistoryCard key={index} friend={friend} />;
            }
          })
        }
      </div>
    </div>
  );
};

export default TimeLine;
