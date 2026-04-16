import { useContext, useState } from "react";
import { Pie, PieChart, Tooltip } from "recharts";
import { ResponsiveContainer, Cell, Legend } from "recharts";
import { ActivityContext } from "../../context/FriendsActivityContext";

const COLORS = ["#244D3F", "#7E35E1", "#37A163"]; // Purple, dark, green

// const textData = [
//   {
//     id: 1,
//     name: "Arafat Hossain",
//     picture: "https://randomuser.me/api/portraits/men/32.jpg",
//     email: "arafat.hossain@gmail.com",
//     days_since_contact: 18,
//     status: "overdue",
//     tags: ["school"],
//     bio: "We studied together in high school and used to play football every afternoon.",
//     goal: 14,
//     next_due_date: "2025-07-10",
//   },
//   {
//     id: 2,
//     name: "Nusrat Jahan",
//     picture: "https://randomuser.me/api/portraits/women/44.jpg",
//     email: "nusrat.jahan@gmail.com",
//     days_since_contact: 10,
//     status: "almost due",
//     tags: ["college", "best friend"],
//     bio: "Met in college. We often hang out and share everything.",
//     goal: 14,
//     next_due_date: "2025-07-18",
//   },
//   {
//     id: 3,
//     name: "Rahim Uddin",
//     picture: "https://randomuser.me/api/portraits/men/55.jpg",
//     email: "rahim.uddin@yahoo.com",
//     days_since_contact: 5,
//     status: "on-track",
//     tags: ["office"],
//     bio: "Works with me in the same office. We usually have lunch together.",
//     goal: 14,
//     next_due_date: "2025-07-25",
//   },
//   {
//     id: 4,
//     name: "Tanvir Ahmed",
//     picture: "https://randomuser.me/api/portraits/men/21.jpg",
//     email: "tanvir.ahmed@gmail.com",
//     days_since_contact: 20,
//     status: "overdue",
//     tags: ["university", "roommate"],
//     bio: "My university roommate. We stayed together for 4 years.",
//     goal: 14,
//     next_due_date: "2025-07-08",
//   },
// ];
// const callData = [
//   {
//     id: 1,
//     name: "Arafat Hossain",
//     picture: "https://randomuser.me/api/portraits/men/32.jpg",
//     email: "arafat.hossain@gmail.com",
//     days_since_contact: 18,
//     status: "overdue",
//     tags: ["school"],
//     bio: "We studied together in high school and used to play football every afternoon.",
//     goal: 14,
//     next_due_date: "2025-07-10",
//   },
//   {
//     id: 2,
//     name: "Nusrat Jahan",
//     picture: "https://randomuser.me/api/portraits/women/44.jpg",
//     email: "nusrat.jahan@gmail.com",
//     days_since_contact: 10,
//     status: "almost due",
//     tags: ["college", "best friend"],
//     bio: "Met in college. We often hang out and share everything.",
//     goal: 14,
//     next_due_date: "2025-07-18",
//   },
//   {
//     id: 3,
//     name: "Rahim Uddin",
//     picture: "https://randomuser.me/api/portraits/men/55.jpg",
//     email: "rahim.uddin@yahoo.com",
//     days_since_contact: 5,
//     status: "on-track",
//     tags: ["office"],
//     bio: "Works with me in the same office. We usually have lunch together.",
//     goal: 14,
//     next_due_date: "2025-07-25",
//   },
// ];
// const videoData = [
//   {
//     id: 1,
//     name: "Arafat Hossain",
//     picture: "https://randomuser.me/api/portraits/men/32.jpg",
//     email: "arafat.hossain@gmail.com",
//     days_since_contact: 18,
//     status: "overdue",
//     tags: ["school"],
//     bio: "We studied together in high school and used to play football every afternoon.",
//     goal: 14,
//     next_due_date: "2025-07-10",
//   },
//   {
//     id: 2,
//     name: "Nusrat Jahan",
//     picture: "https://randomuser.me/api/portraits/women/44.jpg",
//     email: "nusrat.jahan@gmail.com",
//     days_since_contact: 10,
//     status: "almost due",
//     tags: ["college", "best friend"],
//     bio: "Met in college. We often hang out and share everything.",
//     goal: 14,
//     next_due_date: "2025-07-18",
//   },
// ];

const Stats = () => {
  const { FriendsActivity } = useContext(ActivityContext);

  const callData = FriendsActivity.filter(f => f.type === "AudioCall");
  const textData = FriendsActivity.filter((f) => f.type === "TextMessage");
  const videoData = FriendsActivity.filter((f) => f.type === "videoCall");

  const all = (textData, callData, videoData) => {
    const data = [
      { name: "tex", value: textData.length || 0 },
      { name: "call", value: callData.length || 0 },
      { name: "video", value: videoData.length || 0 },
    ];
    return data;
  };
  const data = all(textData, callData, videoData);
  console.log(textData, callData, videoData);

  return (
    <div className="mx-5 xl:px-0">
      <div className="w-full max-w-277.5 mx-auto">
        <h1 className="mt-20 text-[#1F2937] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">
          Friendship Analytics
        </h1>
        <div className="p-8  bg-white shadow-sm mb-20 rounded-lg mt-4">
          <p className="font-medium text-xl text-[#244D3F]">
            By Interaction Type
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius="80%"
                outerRadius="100%"
                cornerRadius={50}
                paddingAngle={5}
                isAnimationActive
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <div className="mt-4">
                <Legend
                  verticalAlign="bottom"
                  height={36}
                  iconType="circle"
                  wrapperStyle={{
                    paddingTop: "16px",
                  }}
                />
              </div>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Stats;
