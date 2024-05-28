import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@components/layout/RootLayout";
import Error from "@pages/Error";
import SignIn from "@pages/SignIn";
import Signup from "@pages/SignUp";
import VoteLayout from "@components/layout/VoteLayout";
import VoteMain from "@pages/VoteMain";
import VotePart from "@pages/VotePart";
import VoteDemo from "@pages/VoteDemo";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <VoteMain /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/signup", element: <Signup /> },
      {
        path: "/vote",
        element: <VoteLayout />,
        children: [
          { path: "/vote/main", element: <VoteMain /> },
          { path: "/vote/part", element: <VotePart /> },
          { path: "/vote/demo", element: <VoteDemo /> },
        ],
      },
    ],
  },
]);
