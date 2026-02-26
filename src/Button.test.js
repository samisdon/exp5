import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button Component Testing", () => {

  test("renders button text", () => {
    render(<Button />);
    expect(screen.getByText("Submit")).toBeInTheDocument();
    console.log("Test Passed");
    console.log("Button rendered successfully");
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Button />);
    expect(asFragment()).toMatchSnapshot();
    console.log("Snapshot created");
    console.log("UI changes tracked successfully");
  });

});
