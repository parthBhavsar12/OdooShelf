import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Login } from "./auth/Login";
import { Books } from "./books/Books";
import { Signup } from "./auth/Signup";
import { LibrarainLogin } from "./auth/LibrarainLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "books",
        children: [{ index: true, element: <Books /> }],
      },
      // {
      //   path: "profile",
      //   children: [
      //     { index: true, element: <Profile /> },
      //     {
      //       path: "create-profile",
      //       element: <CreateProfile />,
      //     },
      //   ],
      // },
      // {
      //   path: "/",
      //   children: [
      //     { index: true, element: <Home /> },
      //     { path: "create-diet-plan", element: <CreateDietPlan /> },
      //     {
      //       path: "show-diet-plans",
      //       element: <ShowDietPlans />,
      //     },
      //   ],
      // },
      // {
      //   path: "/recipe",
      //   children: [
      //     {
      //       index: true,
      //       element: <Recipes />,
      //     },
      //   ],
      // },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "librarian-login",
    element: <LibrarainLogin />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
]);
export default router;
