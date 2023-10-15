import { render, screen } from '@testing-library/react';
import ColorDisplayLabel from '../colorDisplayLabel';

describe('ColorDisplayLabel component', () => {
  test('renders with the provided props', () => {
    const className = 'testClass';
    const headingText = 'Dummy text';

    render(<ColorDisplayLabel className={className}>{headingText}</ColorDisplayLabel>);

    const headingElement = screen.getByText(headingText);

    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveClass('heading');
    expect(headingElement).toHaveClass(className);
  });
});
