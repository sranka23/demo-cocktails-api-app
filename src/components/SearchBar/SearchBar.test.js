import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, act, createEvent, fireEvent } from "@testing-library/react";

import SearchBar from "./SearchBar";

const setterMethod = jest.fn();

describe("<SearchBar />", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  test("should match snapshot of the component and confirm that expected DOM is rendered", () => {
    const history = createMemoryHistory();
    const route = "/search/";
    history.push(route);
    const { asFragment } = render(
      <Router history={history}>
        <SearchBar searchTerm="" termSetter={setterMethod} />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
