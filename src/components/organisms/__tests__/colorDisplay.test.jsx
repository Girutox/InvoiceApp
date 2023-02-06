import ColorDisplay from "../colorDisplay";
import { render, screen } from "@testing-library/react";

describe("Color Organism", () => {
  it("should render the color display component correctly", () => {
    // AAA
    // arrange
    const subData = [
      {
        id: 1,
        classNameLabel2: "color-secondary-2",
        colorType: "RGB",
        colorValue: "124, 93, 250",
      },
      {
        id: 2,
        classNameLabel2: "color-secondary-2",
        colorType: "HSL",
        colorValue: "252°, 94%, 67%",
      },
    ];

    render(<ColorDisplay hexColorText="#7C5DFA" subData={subData} />);
    const colorTitle = screen.getByRole("heading", {
      level: 3,
      name: /#7C5Dfa/i,
    });
    const rgbValue = screen.getByRole("heading", {
      level: 3,
      name: "124, 93, 250",
    });

    const hslValue = screen.getByRole("heading", {
      level: 3,
      name: "252°, 94%, 67%",
    });
    // act
    // assert
    expect(colorTitle).toBeInTheDocument();
    expect(rgbValue).toBeInTheDocument();
    expect(hslValue).toBeInTheDocument();
  });
});
