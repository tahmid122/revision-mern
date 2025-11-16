import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout/RootLayout";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Auth/Login/Login";
import SignUp from "../pages/Auth/SignUp/SignUp";
import Tasks from "../pages/Tasks/Tasks";
import TaskDetails from "../pages/TaskDetails/TaskDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Login,
      },
      {
        path: "/signUp",
        Component: SignUp,
      },
      {
        path: "/tasks",
        Component: Tasks,
      },
      {
        path: "/taskDetails/:taskId",
        Component: TaskDetails,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
