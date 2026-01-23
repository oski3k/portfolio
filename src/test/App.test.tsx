import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";

describe("App", () => {
  it("renders without crashing (smoke test)", () => {
    render(<App />);

    const appElement = document.querySelector("#root");
    expect(appElement).toBeDefined();
  });

  it("renders main navigation", () => {
    render(<App />);

    const navElement = document.querySelector("nav");
    expect(navElement).toBeInTheDocument();
  });
});
