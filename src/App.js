import React , { useState, useEffect } from "react";
import "./App.css"
import { useStateValue } from "./context/reducer/index.js";
import { Home } from "./pages";


function App() {
  const [state] = useStateValue();


  return (
    <div className={`app ${state.theme ? "dark" : ""}`}>
      <Home />
    </div>
  );
}

export default App;
