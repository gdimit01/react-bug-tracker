import React from "react";
import { IBug } from "./IBug";

const BugListTable = (props: {
  bugs: IBug[];
  onDeleteBug: (id: string) => void;
}) => {
  const { bugs, onDeleteBug } = props;

  const resolvedPressed = (id: string) => {
    onDeleteBug(id);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Description</th>
          <th>Priority</th>
          <th>Resolved</th>
        </tr>
      </thead>
      <tbody>
        {bugs.length === 0 ? (
          <tr>
            <td colSpan={4}>No bugs found</td>
          </tr>
        ) : (
          bugs.map((bug) => (
            <tr key={bug.id}>
              <td>{bug.id}</td>
              <td>{bug.description}</td>
              <td>{bug.priority}</td>
              <td>
                <button onClick={() => resolvedPressed(bug.id)}>
                  Resolved
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default BugListTable;
