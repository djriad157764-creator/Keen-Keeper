import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {  RouterProvider } from "react-router";
import FriendsActivityContext from "./context/FriendsActivityContext";
import { router } from "./routes/Routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendsActivityContext>
      <RouterProvider router={router}></RouterProvider>
    </FriendsActivityContext>
  </StrictMode>,
);
