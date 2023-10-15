import { render, screen } from '@testing-library/react';
import PlusSign from '../plusSign';

describe('PlusSign component', () => {
  test('renders with the provided props', () => {
    const classNameCircle = 'circle-class';
    const classNamePlus = 'plus-class';
    const spanText = 'Click Me';

    const { container } = render(
      <PlusSign classNameCircle={classNameCircle} classNamePlus={classNamePlus}>
        {spanText}
      </PlusSign>
    );

    const circleElement = container.querySelector(`.${classNameCircle}`);
    const plusElement = screen.getByText(spanText);

    expect(circleElement).toBeInTheDocument();
    expect(circleElement).toHaveClass(classNameCircle);

    expect(plusElement).toBeInTheDocument();
    expect(plusElement).toHaveClass(classNamePlus);
  });
});
