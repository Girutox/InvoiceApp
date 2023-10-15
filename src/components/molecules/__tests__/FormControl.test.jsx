import { render, screen } from '@testing-library/react';
import FormControl from '../formControl';

describe('FormControl component', () => {
  test('renders with the provided props', () => {
    const controlId = 'controlId';
    const labelText = 'Form label';
    const { container } = render(
      <FormControl controlId={controlId} labelText={labelText}>
        {/* Other components here */}
        <span>Demo content</span>
      </FormControl>
    );

    const divElement = container.querySelector('.container');
    const labelElement = screen.getByText(labelText);

    expect(divElement).toBeInTheDocument();
    expect(divElement.querySelector('span')).not.toBeNull();

    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveAttribute('for', controlId);
    expect(labelElement).toHaveClass('body1 color-secondary-3');
  });
});
