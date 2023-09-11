import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BugListTable from "./BugListTable";
import { IBug } from "./IBug";
import { BugPriority } from "./IBug";

describe("<BugListTable />", () => {
  const mockBugs: IBug[] = [
    {
      id: "1",
      description: "Test bug 1",
      priority: BugPriority.MEDIUM,
    },
    {
      id: "2",
      description: "Test bug 2",
      priority: BugPriority.HIGH,
    },
  ];

  it("renders without crashing", () => {
    render(<BugListTable bugs={[]} onDeleteBug={() => {}} />);
  });

  it('shows "No bugs found" when there are no bugs', () => {
    const { getByText } = render(
      <BugListTable bugs={[]} onDeleteBug={() => {}} />
    );
    expect(getByText(/no bugs found/i)).toBeInTheDocument();
  });

  it("renders a list of bugs", () => {
    const { getByText } = render(
      <BugListTable bugs={mockBugs} onDeleteBug={() => {}} />
    );
    expect(getByText(/test bug 1/i)).toBeInTheDocument();
    expect(getByText(/test bug 2/i)).toBeInTheDocument();
  });

  it("calls onDeleteBug when resolved button is clicked", () => {
    const onDeleteBugMock = jest.fn();
    const { getAllByText } = render(
      <BugListTable bugs={mockBugs} onDeleteBug={onDeleteBugMock} />
    );
    const buttons = getAllByText(/resolved/i);

    fireEvent.click(buttons[0]);
    expect(onDeleteBugMock).toHaveBeenCalledWith(mockBugs[0].id);
  });
});
