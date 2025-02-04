import { describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import SinglePokemon from "../pages/SinglePokemon";
import Squad from "../pages/Squad";

describe("App", () => {
  describe("pages loading", () => {
    test("loads home page", () => {
      render(<App />);
      expect(screen.getByText("Pokémon Cards")).toBeInTheDocument();
    });

    test("loads squad page", () => {
      render(<Squad />);
      expect(screen.getByText("Squad")).toBeInTheDocument();
    });

    test("loads single pokemon page", () => {
      render(<SinglePokemon />);
      expect(screen.getByText("Single Pokemon")).toBeInTheDocument();
    });
  });

  test("renders a link to the squad", () => {
    render(<App />);
    expect(screen.getByText("See Team (0)")).toBeInTheDocument();
  });

  test("renders a card", async () => {
    render(<App />);
    const cards = await screen.findAllByTestId("card");
    expect(cards.length).toBeGreaterThan(0);
  });

});
