import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, act, createEvent, fireEvent } from "@testing-library/react";

import ResultCard from "./ResultCard";

const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("<ResultCard />", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  test("should match snapshot of the component", () => {
    const { asFragment } = render(
      <ResultCard
        resultItem={{
          idDrink: 112233,
          strDrink: "Karsk",
          strDrinkThumb: "link_to_img",
          strInstructions: "Norwegian speciality.",
          strCategory: "Ordinary Drink",
          strAlcoholic: "Non_Alcholic",
        }}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test("should not render the description if instructions are not present", () => {
    const { container } = render(
      <ResultCard
        resultItem={{
          idDrink: 112233,
          strDrink: "Karsk",
          strDrinkThumb: "link_to_img",
          strCategory: "Ordinary Drink",
          strAlcoholic: "Non_Alcholic",
        }}
      />
    );
    expect(
      container.querySelectorAll(".cocktail-app_result-item_content_desc")
        .length
    ).toBe(0);
  });
  test("should link to the right detail page", () => {
    const { container } = render(
      <MemoryRouter>
        <ResultCard
          resultItem={{
            idDrink: 112233,
            strDrink: "Karsk",
            strDrinkThumb: "link_to_img",
            strInstructions: "Norwegian speciality.",
            strCategory: "Ordinary Drink",
            strAlcoholic: "Non_Alcholic",
          }}
        />
      </MemoryRouter>
    );
    act(() => {
      fireEvent.click(
        container.querySelector(".cocktail-app_result-item_drink-info")
      );
    });

    expect(mockHistoryPush).toHaveBeenCalledTimes(1);
    expect(mockHistoryPush).toBeCalledWith("/drink/112233");
  });
  test("should check that the category filter works correctly", () => {
    const { container } = render(
      <MemoryRouter>
        <ResultCard
          resultItem={{
            idDrink: 112233,
            strDrink: "Karsk",
            strDrinkThumb: "link_to_img",
            strInstructions: "Norwegian speciality.",
            strCategory: "Ordinary Drink",
            strAlcoholic: "Non_Alcholic",
          }}
        />
      </MemoryRouter>
    );
    act(() => {
      fireEvent.click(
        container.querySelector(".cocktail-app_result-item_content_pills-category")
      );
    });

    expect(mockHistoryPush).toHaveBeenCalledTimes(1);
    expect(mockHistoryPush).toBeCalledWith("/category/Ordinary Drink");
  });
});
