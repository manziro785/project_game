import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/mainPage/mainPage.tsx";
import RegisterPage from "../pages/auth/registerPage/registerPage.tsx";
import LoginPage from "../pages/auth/loginPage/loginPage.tsx";
import NoPage from "../pages/noPage/noPage.tsx";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/*",
    element: <NoPage />,
  },
]);
