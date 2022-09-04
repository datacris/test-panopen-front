/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import { render, screen } from "@testing-library/react";
import UserList from "../userList";
import { BrowserRouter } from "react-router-dom";
import { users } from "./_mockTest";

beforeEach(() => {
  render(<UserList filteredUsers={users} />, { wrapper: BrowserRouter });
});

describe("userList Component", () => {
  it("Verify user has been rendered", async () => {
    expect(screen.getByText(/Student1/i)).toBeInTheDocument();
    expect(screen.getByText(/student1@email.com/i)).toBeInTheDocument();
  });
});
