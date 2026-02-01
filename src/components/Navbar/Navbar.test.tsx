import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import type { OrderItem } from "../../types/orderItem";

describe("Navbar", () => {
  it("renders the navbar component", () => {
    const { container } = render(
      <BrowserRouter>
        <Navbar cartItems={[]} onCartClick={vi.fn()} />
      </BrowserRouter>,
    );

    expect(container).toBeInTheDocument();
  });

  it("shows the correct cart item count", () => {
    const cartItems = [
      { _id: "abc", quantity: 2 },
      { _id: "123", quantity: 3 },
    ] as OrderItem[];

    const { container } = render(
      <BrowserRouter>
        <Navbar cartItems={cartItems} onCartClick={vi.fn()} />
      </BrowserRouter>,
    );

    expect(container.textContent).toContain("5");
  });

  it("triggers onClick when the cart icon is clicked", () => {
    const onCartClick = vi.fn();

    const { getByLabelText } = render(
      <BrowserRouter>
        <Navbar cartItems={[]} onCartClick={onCartClick} />
      </BrowserRouter>,
    );

    const cartButton = getByLabelText("View Cart");
    cartButton.click();

    expect(onCartClick).toHaveBeenCalledTimes(1);
  });
});
