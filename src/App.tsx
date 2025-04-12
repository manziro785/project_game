import "./common.css";
import { RouterProvider } from "react-router-dom";
import { routers } from "./app/routers.tsx";
import { useEffect, useState, createContext } from "react";
import axios from "axios";
// import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

const App = () => {
  return (
    <>
      <MantineProvider>
        <RouterProvider router={routers} />
      </MantineProvider>
    </>
  );
};

export default App;
