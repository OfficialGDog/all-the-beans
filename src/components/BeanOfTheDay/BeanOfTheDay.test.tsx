import { render, screen } from "@testing-library/react";
import BeanOfTheDay from "./BeanOfTheDay";

describe("BeanOfTheDay component test", () => {
  it("renders the BOTD component", () => {
    render(<BeanOfTheDay />);
    const badge = screen.getByText("Bean of the Day");
    expect(badge).toBeInTheDocument();
  });
});
