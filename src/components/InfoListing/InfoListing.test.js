import React from "react";
import axiosMock from "axios";
import { MemoryRouter } from "react-router-dom";
import {
  render,
  act,
  createEvent,
  fireEvent,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { categories, ingredients } from "./testData";
jest.mock("axios");

import InfoListing from "./InfoListing";

const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("<InfoListing />", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  test("should match snapshot of the Ingredients List component", async () => {
    let wrapper;
    axiosMock.get.mockResolvedValueOnce(ingredients);
    await act(async () => {
      wrapper = await render(
        <MemoryRouter>
          <InfoListing listType="ingredient" />
        </MemoryRouter>
      );
    });
    const { asFragment, container } = wrapper;
    expect(asFragment()).toMatchSnapshot();
    expect(
      container.querySelector(".MuiTypography-h4").textContent.trim()
    ).toBe("Ingredients");
  });

  test("should match snapshot of the Categories  List component", async () => {
    let wrapper;
    axiosMock.get.mockResolvedValueOnce(categories);
    await act(async () => {
      wrapper = await render(
        <MemoryRouter>
          <InfoListing listType="category" />
        </MemoryRouter>
      );
    });
    const { asFragment, container } = wrapper;
    expect(asFragment()).toMatchSnapshot();
    expect(
      container.querySelector(".MuiTypography-h4").textContent.trim()
    ).toBe("Categories");
  });
});
