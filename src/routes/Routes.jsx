import { createBrowserRouter } from "react-router";
import RootLayout from "../rootLayout/RootLayout";
import HomePage from "../ui/homePage/HomePage";
import TimeLine from "../page/timeline/TimeLine";
import Stats from "../page/stats/Stats";
import FriendsDetails from "../ui/friendsComponents/FriendsDetails";
import NotFoundPage from "../page/Error/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "timeline", Component: TimeLine},
      { path: "stats", Component: Stats },
      { path: "/friendDetails/:id", Component: FriendsDetails },
    ],
    errorElement: <NotFoundPage />,
  },
]);
