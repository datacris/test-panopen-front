/* eslint-disable testing-library/no-render-in-setup */
import React from "react";
import { Routes, Route, MemoryRouter } from "react-router-dom";
import User from "../user";
import { create } from "react-test-renderer";

describe("User Component", () => {
  it("User Renders correctly", () => {
    let renderer = create(
      <MemoryRouter initialEntries={["/user/1"]}>
        <Routes>
          <Route path="/user/:userId" element={<User />} />
        </Routes>
      </MemoryRouter>
    );
    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
