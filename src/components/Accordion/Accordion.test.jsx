import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test } from "vitest";
import Accordion from "./index.jsx";

describe("Accordion", () => {
  beforeEach(() => {
    render(<Accordion title="Título">Contenido</Accordion>);
  });
  afterEach(() => {
    cleanup();
  });
  test("Accordion should show the title", () => {
    expect(screen.getByText("Título"));
  });
  test("title should be in a h3", () => {
    expect(screen.getByRole("heading").textContent).toBe("Título");
  });
  test("when renden first time children is not shown", () => {
    expect(screen.queryByText("Contenido")).toBeNull();
  });
  test("when click on title toggle the shown of the content", () => {
    const title = screen.getByText("Título");
    fireEvent.click(title);
    expect(screen.getByText("Contenido"));
    fireEvent.click(title);
    expect(screen.queryByText("Contenido")).toBeNull();
    fireEvent.click(title);
    expect(screen.getByText("Contenido"));
    fireEvent.click(title);
    expect(screen.queryByText("Contenido")).toBeNull();
  });
});
