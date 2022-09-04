/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Dashboard from "../dashboard";
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
  render(<Dashboard />, { wrapper: BrowserRouter });
});

describe("SearchBox Component", () => {
  it("SearchBox input renders", () => {
    const searchInput = screen.getByTestId("searchUser");
    expect(searchInput).toBeInTheDocument();
  });

  it("Search input changes", () => {
    const searchInput = screen.getByTestId("searchUser");
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
  });
});
