import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Login } from "./auth/Login";
// import { Books } from "./books/Books1";
import { Signup } from "./auth/Signup";
import { LibrarainLogin } from "./auth/LibrarainLogin";
import { LibrarianSignup } from "./auth/SignupLib";
import Books from "./books/Books";
import Home from "./Home";
import UserBooks from "./books/UserBooks";
import BorrowedBooks from "./books/GetBorrowedBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        children: [{ index: true, element: <Home /> }],
      },
      {
        path: "books",
        children: [
          { index: true, element: <UserBooks /> },
          { path: "library-books", element: <Books /> },
          { path: "get-borrowed-books", element: <BorrowedBooks /> },
        ],
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
    path: "librarian-signup",
    element: <LibrarianSignup />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
]);
export default router;
