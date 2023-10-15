import { render, screen } from '@testing-library/react';
import LabelCustom from '../labelCustom';

describe('LabelCustom component', () => {
  test('renders with the provided props', () => {
    const controlId = 'testId';
    const labelText = 'Dummy label';

    render(<LabelCustom controlId={controlId}>{labelText}</LabelCustom>);

    const labelElement = screen.getByText(labelText);
    const htmlForAttribute = labelElement.getAttribute('for');

    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveClass('body1');
    expect(labelElement).toHaveClass('color-secondary-3');
    expect(htmlForAttribute).toBe(controlId);
  });
});
