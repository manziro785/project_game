import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/mainPage/mainPage.tsx";
import RegisterPage from "../pages/auth/registerPage/registerPage.tsx";
import LoginPage from "../pages/auth/loginPage/loginPage.tsx";
import NoPage from "../pages/noPage/noPage.tsx";
import StartSurvey from "../pages/startSurvey/startSurvey.tsx";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/start_survey",
    element: <StartSurvey />,
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
