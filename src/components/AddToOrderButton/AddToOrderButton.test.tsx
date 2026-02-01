import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
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

  it("triggers addToOrder when the button is clicked", () => {
    const onAddToOrder = vi.fn();

    render(<AddToOrderButton bean={mockBean} onAddToOrder={onAddToOrder} />);

    fireEvent.click(screen.getByRole("button"));

    expect(onAddToOrder).toHaveBeenCalledTimes(1);
    expect(onAddToOrder).toHaveBeenCalledWith(mockBean);
  });
});
