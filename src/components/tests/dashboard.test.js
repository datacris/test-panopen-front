/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import { render, screen } from "@testing-library/react";
import Dashboard from "../dashboard";
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
  render(<Dashboard />, { wrapper: BrowserRouter });
});

describe("Dashboard Component", () => {
  it("Dashboard title", () => {
    const dashboardTitle = screen.getByText(/Demo courses/i);
    expect(dashboardTitle).toBeInTheDocument();
  });
});
