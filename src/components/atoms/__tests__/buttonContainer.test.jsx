import { render, fireEvent } from '@testing-library/react';
import ButtonContainer from '../buttonContainer';

describe('ButtonContainer component', () => {
  test('renders with the provided props', () => {
    const onClickMock = jest.fn();
    const className = 'custom-class';

    const { getByText } = render(
      <ButtonContainer type="button" onClick={onClickMock} className={className}>
        Click Me
      </ButtonContainer>
    );
    const buttonElement = getByText('Click Me');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('type', 'button');
    expect(buttonElement).toHaveClass(className);

    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
