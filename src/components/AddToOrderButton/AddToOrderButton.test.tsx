import { render, screen } from "@testing-library/react";
import AddToOrderButton from "./AddToOrderButton";

const mockBean = {
  _id: "1",
  index: 0,
  isBOTD: false,
  Cost: "£39.26",
  Image: "https://example.com/coffee.jpg",
  colour: "dark roast",
  Name: "TURNABOUT",
  Description: "Test description",
  Country: "Peru",
};

describe("AddToOrderButton component test", () => {
  it("Should render component", () => {
    render(<AddToOrderButton bean={mockBean} onAddToOrder={vi.fn()} />);

    const button = screen.getByRole("button", { name: "£39.26" });

    expect(button).toBeInTheDocument();
  });
});