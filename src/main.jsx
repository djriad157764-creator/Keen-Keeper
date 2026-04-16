import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./rootLayout/RootLayout";
import HomePage from "./ui/homePage/HomePage";
import TimeLine from "./page/timeline/TimeLine";
import Stats from "./page/stats/Stats";
import FriendsDetails from "./ui/friendsComponents/FriendsDetails";
import FriendsActivityContext from "./context/FriendsActivityContext";
import NotFoundPage from "./page/Error/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "timeline", Component: TimeLine },
      { path: "stats", Component: Stats },
      { path: "/friendDetails/:id", Component: FriendsDetails },
    ],
    errorElement: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendsActivityContext>
      <RouterProvider router={router}></RouterProvider>
    </FriendsActivityContext>
  </StrictMode>,
);
