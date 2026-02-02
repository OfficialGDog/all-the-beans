import { render, screen } from "@testing-library/react";
import { OrderModal } from "./OrderModal";
import type { OrderItem } from "../../types/orderItem";

const mockOnClose = vitest.fn();

const mockItems: OrderItem[] = [
  {
    _id: "dshgffjhghdfgdgf",
    index: 0,
    Name: "Starbucks Coffee",
    colour: "dark roast",
    Description:
      "Starbucks Corporation is an American multinational chain of coffeehouses",
    Country: "USA",
    isBOTD: false,
    Image: "/picutres/",
    Cost: "£6.50",
    quantity: 1,
  },
  {
    _id: "jhkfghfghfghdf",
    index: 1,
    Name: "Costa Coffee",
    colour: "dark roast",
    Description:
      "Costa Coffee is a leading coffeehouse chain founded in 1971 in London",
    Country: "UK",
    isBOTD: true,
    Image: "/picutres/",
    Cost: "£5.50",
    quantity: 2,
  },
];

describe("OrderModal component test", () => {
  // Mock ResizeObserver
  beforeEach(() => {
    globalThis.ResizeObserver = class MockedResizeObserver {
      observe = vitest.fn();
      unobserve = vitest.fn();
      disconnect = vitest.fn();
    };
  });

  it("component renders no items selected", () => {
    render(<OrderModal open={true} orderItems={[]} onClose={mockOnClose} onAddToOrder={() => vitest.fn()} onRemoveFromOrder={() => vitest.fn()} />);

    expect(screen.getByText("No items selected.")).toBeInTheDocument();
    expect(screen.getByTestId("order-total")).toHaveTextContent("Total £0.00");
  });

  it("renders order items and calculates total correctly", () => {
    render(
      <OrderModal open={true} orderItems={mockItems} onClose={mockOnClose} onAddToOrder={() => vitest.fn()} onRemoveFromOrder={vitest.fn()} />,
    );

    expect(screen.getByText("Starbucks Coffee")).toBeInTheDocument();
    expect(screen.getByText("Costa Coffee")).toBeInTheDocument();

    expect(screen.getByTestId("order-total")).toBeInTheDocument();
    expect(screen.getByTestId("order-total")).toHaveTextContent("Total £17.50");
  });
});
