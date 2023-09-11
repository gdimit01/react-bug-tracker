import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [newBugDescription, setNewBugDescription] = useState<string>("");
  const [newBugPriority, setNewBugPriority] = useState<string>("Medium");
  const [bugs, setBugs] = useState<
    Array<{ title: string; description: string }>
  >([]);
  return (
    <div>
      <h1>🐞 Bug Tracker</h1>
    </div>
  );
}

export default App;
