import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignIn from "../components/SignIn";

describe("Check the rendering of Sign In Page", () => {
  test("Should check the close button", () => {
    render(<SignIn />);

    const heading = screen.getByText("Login");
    expect(heading).toBeInTheDocument();
  });
});
