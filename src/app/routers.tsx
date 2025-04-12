import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/mainPage/mainPage.tsx";
import RegisterPage from "../pages/auth/registerPage/registerPage.tsx";
import LoginPage from "../pages/auth/loginPage/loginPage.tsx";
import NoPage from "../pages/noPage/noPage.tsx";
import StartSurvey from "../pages/startSurvey/startSurvey.tsx";
import TestPage from "../components/testPage/testPage.tsx";
import TestPage2 from "../components/testPage/testPage2.tsx";
import TestPage3 from "../components/testPage/testPage3.tsx";
import TestPageQuiz from "../components/testPage/testPageQuiz.tsx";
import TestPage4 from "../components/testPage/testPage4.tsx";

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
    path: "/test/2",
    element: <TestPage />,
  },
  {
    path: "/test/3",
    element: <TestPage2 />,
  },
  {
    path: "/test/4",
    element: <TestPage3 />,
  },
  {
    path: "/test/check",
    element: <TestPageQuiz />,
  },
  {
    path: "/test/5",
    element: <TestPage4 />,
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
