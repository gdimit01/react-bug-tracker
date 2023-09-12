import React, { useState, FormEvent } from "react";
import "./App.css";
import { BugPriority, IBug } from "./IBug";
import { v4 as uuid } from "uuid";
import BugListTable from "./BugListTable";

interface BugStatisticsProps {
  bugs: IBug[];
}

function BugStatistics({ bugs }: BugStatisticsProps) {
  const totalBugs = bugs.length;
  const lowPriorityBugs = bugs.filter((bug) => bug.priority === "Low").length;
  const mediumPriorityBugs = bugs.filter(
    (bug) => bug.priority === "Medium"
  ).length;
  const highPriorityBugs = bugs.filter((bug) => bug.priority === "High").length;

  return (
    <div className="statistics-dashboard">
      <h2>Statistics</h2>
      <p>Total Bugs: {totalBugs}</p>
      <p>Low Priority: {lowPriorityBugs}</p>
      <p>Medium Priority: {mediumPriorityBugs}</p>
      <p>High Priority: {highPriorityBugs}</p>
    </div>
  );
}

function App() {
  const [newBugDescription, setNewBugDescription] = useState("");
  const [newBugPriority, setNewBugPriority] = useState("Medium");
  const [bugsList, setBugsList] = useState<IBug[]>([]);

  const addNewBug = (event: FormEvent) => {
    event.preventDefault();
    const newBug = {
      id: uuid(),
      description: newBugDescription,
      priority: newBugPriority as BugPriority,
    };
    setBugsList((prevBugs) => [...prevBugs, newBug]);
    setNewBugDescription("");
    setNewBugPriority("Medium");
  };

  const deleteBug = (id: string) => {
    setBugsList((prevBugs) => prevBugs.filter((bug) => bug.id !== id));
  };

  return (
    <>
      <h1 className="App-header">🐞 Bug Tracker</h1>
      <BugStatistics bugs={bugsList} />
      <BugListTable bugs={bugsList} onDeleteBug={deleteBug} />
      <div className="add-new-bug-form">
        <form onSubmit={addNewBug}>
          <label htmlFor="newBugDescription">New bug description:</label>
          <input
            type="text"
            id="newBugDescription"
            value={newBugDescription}
            onChange={(e) => setNewBugDescription(e.target.value)}
          />
          <label htmlFor="newBugPriority">New bug priority:</label>
          <select
            id="newBugPriority"
            value={newBugPriority}
            onChange={(e) => setNewBugPriority(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <button type="submit">Add New Bug</button>
        </form>
      </div>
    </>
  );
}

export default App;
