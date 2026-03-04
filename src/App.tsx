import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import "./styles/global.css";
import { Tasks } from "./components/Tasks/Tasks";
import { Refs } from "./components/Concepts/Refs";

function App() {
  return (
    <>
      <Header />
      <Tasks />
      {/* <Refs /> */}
    </>
  );
}

export default App;
