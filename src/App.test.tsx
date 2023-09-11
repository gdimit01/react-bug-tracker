import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders bug tracker heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/🐞 Bug Tracker/i);
  expect(headingElement).toBeInTheDocument();
});
