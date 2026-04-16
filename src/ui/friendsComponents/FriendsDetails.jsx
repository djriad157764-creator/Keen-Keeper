import React, { useContext } from "react";
import { useParams } from "react-router";
import useFetchData from "../../hooks/useFetchData";
import { RingLoader } from "react-spinners";
import { RiAlarmSnoozeLine, RiDeleteBinLine } from "react-icons/ri";
import {
  IoArchiveOutline,
  IoCallOutline,
  IoVideocamOutline,
} from "react-icons/io5";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { ActivityContext } from "../../context/FriendsActivityContext";

const FriendsDetails = () => {
  const { FriendsActivity, handleCallBtn, handleTextBtn, handleVideoBtn } =
    useContext(ActivityContext);

  const { loading, friendsData = [] } = useFetchData();
  const { id } = useParams();

  const findFriendData = friendsData.find((item) => item.id == id);

  const {
    name,
    picture,
    tags,
    status,
    bio,
    email,
    days_since_contact,
    goal,
    next_due_date,
  } = findFriendData || {};

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <RingLoader />
      </div>
    );
  }
  if (!findFriendData) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <h1 className="text-xl font-bold">No Friend Found with this ID!</h1>
      </div>
    );
  }
  return (
    <div className="mx-5 xl:px-0">
      <div className="lg:flex items-start gap-6 w-full max-w-277.5 mt-20 mx-auto mb-20">
        <div className="flex-1">
          <div className=" text-center bg-white p-6 shadow-sm rounded-lg ">
            <div className="">
              <img
                className="rounded-full w-20 h-20 object-cover mx-auto mb-3"
                src={picture}
                alt={name}
              />
            </div>
            <div className="">
              <h2 className="text-[#1F2937] text-xl font-semibold mb-2">
                {name}
              </h2>
              <div className="flex justify-center items-center mb-2">
                <p
                  className={`${status === "overdue" && "bg-[#EF4444]"} ${status === "on-track" && "bg-[#244D3F]"} ${status === "almost due" && "bg-[#EFAD44]"} text-[12px] font-medium text-white rounded-full px-2 py-1.5 w-fit`}
                >
                  {status}
                </p>
              </div>
              <div className="flex items-center gap-2 justify-center">
                {tags?.map((tag, index) => (
                  <p
                    className="bg-[#CBFADB] px-2 py-1.5 rounded-full text-[#244D3F] text-[12px] font-medium mb-3"
                    key={index}
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </div>
            <div className="">
              <p className="mb-3 font-medium text-[#64748B]">"{bio}"</p>
              <p className="text-[12px] text-[#64748B]">Email : {email}</p>
            </div>
          </div>
          <div className="mt-4 font-medium ">
            <div className="py-4 bg-white rounded-sm text-[#1F2937] shadow-sm flex items-center gap-2 justify-center mb-2">
              <RiAlarmSnoozeLine className="text-xl" />
              Snooze 2 weeks
            </div>
            <div className="py-4 bg-white rounded-sm text-[#1F2937] shadow-sm flex items-center gap-2 justify-center mb-2">
              <IoArchiveOutline className="text-xl" />
              Archive
            </div>
            <div className="py-4 bg-white rounded-sm text-[#EF4444] shadow-sm flex items-center gap-2 justify-center ">
              <RiDeleteBinLine className="text-xl" />
              Delete
            </div>
          </div>
        </div>

        <div className="lg:flex-2 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white text- text-center px-4 py-7.5 rounded-lg shadow-sm">
              <h3 className="text-3xl text-[#244D3F] font-semibold mb-2">
                {days_since_contact}
              </h3>
              <p className="text-[#64748B] text-lg">Days Since Contact</p>
            </div>
            <div className="bg-white  text-center px-4 py-7.5 rounded-lg shadow-sm">
              <h3 className="text-3xl text-[#244D3F] font-semibold mb-2">
                {goal}
              </h3>{" "}
              <p className="text-[#64748B] text-lg">Goal (Days)</p>
            </div>
            <div className="bg-white  text-center px-4 py-7.5 rounded-lg shadow-sm">
              <h3 className="text-3xl text-[#244D3F] font-semibold mb-2">
                {next_due_date}
              </h3>{" "}
              <p className="text-[#64748B] text-lg">Next Due</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-medium text-[#244D3F]">
                Relationship Goal
              </h4>
              <button className="btn text-sm font-medium">Edit</button>
            </div>
            <p className="text-[#64748B] text-lg">
              Connect every{" "}
              <span className="font-bold text-[#1F2937]">{goal} days</span>
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-medium text-[#244D3F] mb-4">
              Quick Check-In
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
              <div
                onClick={() => handleCallBtn(findFriendData)}
                className="bg-[#F8FAFC] text-[#1F2937] cursor-pointer hover:bg-gray-100 border border-neutral/5 text-center p-4 rounded-lg shadow-sm"
              >
                <IoCallOutline className="text-[32px] mb-2 mx-auto" />
                <p className=" text-lg">Call</p>
              </div>
              <div
                onClick={() => handleTextBtn(findFriendData)}
                className="bg-[#F8FAFC] text-[#1F2937] cursor-pointer hover:bg-gray-100 border border-neutral/5  text-center p-4  rounded-lg shadow-sm"
              >
                <HiOutlineChatBubbleBottomCenterText className="text-[32px] mb-2 mx-auto" />

                <p className="text-lg">Text</p>
              </div>
              <div
                onClick={() => handleVideoBtn(findFriendData)}
                className="bg-[#F8FAFC] text-[#1F2937] cursor-pointer hover:bg-gray-100 border border-neutral/5  text-center p-4 rounded-lg shadow-sm"
              >
                <IoVideocamOutline className="text-[32px] mb-2 mx-auto" />
                <p className="text-lg">Video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetails;
