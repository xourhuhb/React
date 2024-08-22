import { render, screen, waitFor } from "@testing-library/react";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/ResataurantList.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render body component with search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  waitFor(() => {
    const searchbutton = screen.getByTestId("search");
    expect(searchbutton).toBeInTheDocument();

    fireEvent.change(
      screen.getByPlaceholderText("Search for restaurants and foods"),
      {
        target: { value: "Pizza" },
      }
    );

    fireEvent.click(searchbutton);
  });
});
