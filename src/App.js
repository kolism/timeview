import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import WeeksView from "./views/WeeksView";

function App() {
  const [] = useState(null);
  useEffect(() => {}, []);
  return (
    <main>
      <h1>Timeview</h1>
      <WeeksView />
    </main>
  );
}

export default App;
