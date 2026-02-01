import { render, screen, fireEvent } from "@testing-library/react";
import BeanDetail from "./BeanDetail";
import type { BeanDetailProps } from "../../types/coffeeBean";

const mockBean: BeanDetailProps["bean"] = {
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

describe("BeanDetail component test", () => {
  it("renders bean details correctly", () => {
    const onAddToOrder = vitest.fn();

    render(<BeanDetail bean={mockBean} onAddToOrder={onAddToOrder} />);

    expect(screen.getByText(mockBean.Name)).toBeInTheDocument();
    expect(screen.getByText(mockBean.Country)).toBeInTheDocument();
    expect(screen.getByText(`Roast: ${mockBean.colour}`)).toBeInTheDocument();
    expect(screen.getByText(mockBean.Description)).toBeInTheDocument();

    expect(
      screen.getByAltText(`${mockBean.Name} from ${mockBean.Country}`),
    ).toBeInTheDocument();
  });

  it("passes bean object to onAddToOrder when the button is clicked", () => {
    const onAddToOrder = vitest.fn();

    render(<BeanDetail bean={mockBean} onAddToOrder={onAddToOrder} />);

    fireEvent.click(screen.getByRole("button"));

    expect(onAddToOrder).toHaveBeenCalledTimes(1);
    expect(onAddToOrder).toHaveBeenCalledWith(mockBean);
  });
});
