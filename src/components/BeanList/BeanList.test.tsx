import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BeanList from "./BeanList";

describe("BeanList component test", () => {
  const mockBeans = [
    {
      _id: "66a3745997fa4069ce1b418f",
      index: 14,
      isBOTD: false,
      Cost: "£13.00",
      Image: "/images/colombia.jpg",
      colour: "green",
      Name: "Colombian Supremo",
      Description: "Best coffee from Colombia",
      Country: "Colombia",
    },
    {
      _id: "66a37459caf60416d0571db4",
      index: 13,
      isBOTD: false,
      Cost: "£19.99",
      Image: "/images/americano.jpg",
      colour: "dark roast",
      Name: "Americano",
      Description: "A Classic Americano",
      Country: "USA",
    },
  ];

  it("renders a list of beans with names and countries", () => {
    const onAddToOrder = vitest.fn();

    render(
      <MemoryRouter>
        <BeanList beans={mockBeans} onAddToOrder={onAddToOrder} />
      </MemoryRouter>,
    );

    expect(screen.getByText("Colombian Supremo")).toBeInTheDocument();
    expect(screen.getByText("Colombia")).toBeInTheDocument();

    expect(screen.getByText("Americano")).toBeInTheDocument();
    expect(screen.getByText("USA")).toBeInTheDocument();
  });

  it("passes the correct bean when the button is clicked", () => {
    const onAddToOrder = vitest.fn();

    render(
      <MemoryRouter>
        <BeanList beans={mockBeans} onAddToOrder={onAddToOrder} />
      </MemoryRouter>,
    );

    const buttons = screen.getAllByRole("button");
    fireEvent.click(buttons[0]);

    expect(onAddToOrder).toHaveBeenCalledTimes(1);
    expect(onAddToOrder).toHaveBeenCalledWith(mockBeans[0]);
  });

  it("links to detail page", () => {
    const onAddToOrder = vitest.fn();

    render(
      <MemoryRouter>
        <BeanList beans={mockBeans} onAddToOrder={onAddToOrder} />
      </MemoryRouter>,
    );

    const link = screen.getByLabelText(
      "View details for Colombian Supremo from Colombia",
    );
    expect(link).toHaveAttribute("href", "/beans/66a3745997fa4069ce1b418f");
  });
});
