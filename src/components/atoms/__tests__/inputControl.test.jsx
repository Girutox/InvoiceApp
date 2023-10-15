import { render, screen } from '@testing-library/react';
import InputControl from '../inputControl';

describe('InputControl component', () => {
  test('renders with the provided props and with the "active" class', () => {
    const controlId = 'testId';
    const inputValue = 'Dummy value';

    render(<InputControl controlId={controlId} value={inputValue} includeActive={true} />);
    const inputElement = screen.getByRole('textbox');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
    expect(inputElement).toHaveAttribute('id', controlId);
    expect(inputElement).toHaveValue(inputValue);

    expect(inputElement).toHaveClass('input');
    expect(inputElement).toHaveClass('body2');
    expect(inputElement).toHaveClass('includeActive');
  });

  test('renders without the "active" class', () => {
    render(<InputControl controlId={'testId'} value={'Dummy value'} includeActive={false} />);
    const inputControl = screen.getByRole('textbox');

    expect(inputControl).not.toHaveClass('includeActive');
  });
});
