import { render, screen, fireEvent } from '@testing-library/react';
import SpanCustom from '../spanCustom';

describe('SpanCustom component', () => {
  test('renders with the provided props', () => {
    const className = 'testClass';
    const spanText = 'Click me!';
    const onClickMock = jest.fn();

    render(
      <SpanCustom className={className} onClick={onClickMock}>
        {spanText}
      </SpanCustom>
    );

    const spanElement = screen.getByText(spanText);

    expect(spanElement).toBeInTheDocument();
    expect(spanElement).toHaveClass(className);
  });

  test('calls onClick function when clicked', () => {
    const spanText = 'Click me!';
    const onClickMock = jest.fn();

    render(
      <SpanCustom onClick={onClickMock}>{spanText}</SpanCustom>
    );

    const spanElement = screen.getByText(spanText);
    fireEvent.click(spanElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
