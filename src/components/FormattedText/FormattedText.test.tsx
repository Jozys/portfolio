import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import FormattedText from "./FormattedText";

describe("FormattedText", () => {
  it("interpolates tokens and renders markdown", () => {
    render(
      <FormattedText
        content="I am {{age}} years old. This is a **bold** statement."
        values={{ age: 24 }}
      />,
    );

    expect(screen.getByText(/24 years old/i)).toBeInTheDocument();
    const strongElements = screen.getAllByText(/24 years old|bold/);
    expect(strongElements.length).toBeGreaterThanOrEqual(1);
  });

  it("renders single paragraph with a link as a paragraph element", () => {
    const { container } = render(
      <FormattedText
        content="App entwickelt mit [Niklas Buse](https://niklas-buse.de) an der DHBW."
        paragraphSx={{ mt: 2 }}
      />,
    );

    const paragraphs = container.querySelectorAll("p");
    expect(paragraphs.length).toBe(1);

    const link = screen.getByRole("link", { name: "Niklas Buse" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://niklas-buse.de");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("renders multiple paragraphs", () => {
    const { container } = render(
      <FormattedText content={"Erster Absatz.\n\nZweiter Absatz."} />,
    );

    const paragraphs = container.querySelectorAll("p");
    expect(paragraphs.length).toBe(2);
  });
});
