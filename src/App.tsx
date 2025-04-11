import "./common.css";
import { RouterProvider } from "react-router-dom";
import { routers } from "./app/routers.tsx";
import { useEffect, useState, createContext } from "react";
import axios from "axios";
// import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

export const AuthContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>]
>([false, () => {}]);
export const UserContext = createContext<
  [any, React.Dispatch<React.SetStateAction<any>>]
>([{}, () => {}]);

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    console.log("Токен при запуске:", token); // Для отладки

    if (!token) return;
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    axios
      .get("http://localhost:8080/api/v1/users/me")
      .then((res) => {
        setIsAuth(true);
        setUser(res.data);
      })
      .catch((error) => {
        console.error("Ошибка при получении профиля пользователя:", error);
        if (error.response?.status === 403) {
          localStorage.removeItem("access_token"); // Удаляем недействительный токен
          setIsAuth(false);
        }
      });
  }, []);

  return (
    <>
      <MantineProvider>
        <AuthContext.Provider value={[isAuth, setIsAuth]}>
          <UserContext.Provider value={[user, setUser]}>
            <RouterProvider router={routers} />
          </UserContext.Provider>
        </AuthContext.Provider>
      </MantineProvider>
    </>
  );
};

export default App;
