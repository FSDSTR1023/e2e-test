import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import { Button } from "./Button.jsx";

describe("Button", () => {
  afterEach(() => {
    cleanup();
  });

  test("should render a button", () => {
    render(<Button />);
    screen.debug();
    //expect(screen.getByRole("button"));
  });

  test("if click the counter should increment", () => {
    render(<Button />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(screen.getByText("1"));
    fireEvent.click(button);
    expect(screen.getByText("2"));
  });

  test("if no click the function should not be called", () => {
    render(<Button />);
    expect(screen.getByText("0"));
  });

  test("should have a className", () => {
    render(<Button className="btn gallina" />);
    expect(screen.getByRole("button").className).toContain("btn");
  });
});
