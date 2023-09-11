import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { IBug } from "./IBug";

function App() {
  const [newBugDescription, setNewBugDescription] = useState<string>("");
  const [newBugPriority, setNewBugPriority] = useState<string>("Medium");
  const [bugsList, setBugsList] = useState<IBug[]>([]);

  const addNewBug = () => {};

  const deleteBug = () => {};

  return (
    <div>
      <h1>🐞 Bug Tracker</h1>
    </div>
  );
}

export default App;
