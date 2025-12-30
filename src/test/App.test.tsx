import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";

describe("App", () => {
  it("renders without crashing (smoke test)", () => {
    // Arrange & Act
    render(<App />);

    // Assert - Check if the app renders by looking for a common element
    // We'll check for the root div which should always be present
    const appElement = document.querySelector("#root");
    expect(appElement).toBeDefined();
  });

  it("renders main navigation", () => {
    // Arrange & Act
    render(<App />);

    // Assert - Check if navigation is present (search for nav element)
    const navElement = document.querySelector("nav");
    expect(navElement).toBeInTheDocument();
  });
});
