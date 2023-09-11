import React, { FormEvent } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { BugPriority, IBug } from "./IBug";
import { v4 as uuid } from "uuid";

function App() {
  const [newBugDescription, setNewBugDescription] = useState<string>("");
  const [newBugPriority, setNewBugPriority] = useState<string>("Medium");
  const [bugsList, setBugsList] = useState<IBug[]>([]);

  const addNewBug = (event: FormEvent) => {
    event.preventDefault();

    const newBug: IBug = {
      id: uuid(),
      description: newBugDescription,
      priority: newBugPriority as BugPriority,
    };
    setBugsList([...bugsList, newBug]);
    setNewBugDescription("");
    setNewBugPriority("Medium");
  };

  const deleteBug = (id: string) => {
    const bugs = bugsList.filter((bug) => bug.id !== id);
    setBugsList(bugs);
  };

  return (
    <div>
      <h1>🐞 Bug Tracker</h1>
      <form onSubmit={addNewBug}>
        <label htmlFor="newBugDescription">New bug description: </label>
        <input
          type="text"
          id="newBugDescription"
          value={newBugDescription}
          onChange={(event) => setNewBugDescription(event.target.value)}
        />
        <label htmlFor="newBugPriority">New bug priority: </label>
        <select
          id="newBugPriority"
          value={newBugPriority}
          onChange={(event) => setNewBugPriority(event.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button type="submit">Add New Bug</button>
      </form>
    </div>
  );
}

export default App;
