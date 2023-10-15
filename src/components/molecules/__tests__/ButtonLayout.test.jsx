import { render, screen, fireEvent } from '@testing-library/react';
import ButtonLayout from '../buttonLayout';

describe('ButtonLayout component', () => {
  test('renders with the provided props', () => {
    const onClickMock = jest.fn();
    const classNameButton = 'custom-button-class';
    const classNameCircle = 'custom-circle-class';
    const classNamePlus = 'custom-plus-class';
    const classNameSpan = 'custom-span-class';
    const signValue = '+';
    const spanText = 'Click Me!';

    const { container } = render(
      <ButtonLayout
        onClick={onClickMock}
        classNameButton={classNameButton}
        classNameCircle={classNameCircle}
        classNamePlus={classNamePlus}
        classNameSpan={classNameSpan}
        includeSign={true}
        signValue={signValue}
        spanText={spanText}
      />
    );

    const buttonElement = screen.getByRole('button');
    const plusSignElement = screen.getByText(signValue);
    const spanElement = screen.getByText(spanText);

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('customButton');
    expect(buttonElement).toHaveClass(classNameButton);

    expect(container.querySelector(`.${classNameCircle}`)).toBeInTheDocument();

    expect(plusSignElement).toBeInTheDocument();
    expect(plusSignElement).toHaveClass(classNamePlus);

    expect(spanElement).toBeInTheDocument();
    expect(spanElement).toHaveClass('customSpan');
    expect(spanElement).toHaveClass(classNameSpan);
  });

  test('renders without plus sign', () => {
    const onClickMock = jest.fn();
    const classNameButton = 'custom-button-class';
    const classNameCircle = 'custom-circle-class';
    const classNamePlus = 'custom-plus-class';
    const classNameSpan = 'custom-span-class';
    const signValue = '+';
    const spanText = 'Click Me!';

    const { container } = render(
      <ButtonLayout
        onClick={onClickMock}
        classNameButton={classNameButton}
        classNameCircle={classNameCircle}
        classNamePlus={classNamePlus}
        classNameSpan={classNameSpan}
        includeSign={false}
        signValue={signValue}
        spanText={spanText}
      />
    );

    const buttonElement = screen.getByRole('button');
    const plusSignElement = screen.queryByText(signValue);
    const spanElement = screen.getByText(spanText);

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('customButton');
    expect(buttonElement).toHaveClass(classNameButton);

    expect(container.querySelector(`.${classNameCircle}`)).not.toBeInTheDocument();
    expect(plusSignElement).not.toBeInTheDocument();

    expect(spanElement).toBeInTheDocument();
    expect(spanElement).toHaveClass('customSpan');
    expect(spanElement).toHaveClass(classNameSpan);
  });

  test('calls onClick function when clicked', () => {
    const onClickMock = jest.fn();
    const classNameButton = 'custom-button-class';
    const classNameCircle = 'custom-circle-class';
    const classNamePlus = 'custom-plus-class';
    const classNameSpan = 'custom-span-class';
    const signValue = '+';
    const spanText = 'Click Me!';

    render(
      <ButtonLayout
        onClick={onClickMock}
        classNameButton={classNameButton}
        classNameCircle={classNameCircle}
        classNamePlus={classNamePlus}
        classNameSpan={classNameSpan}
        includeSign={false}
        signValue={signValue}
        spanText={spanText}
      />
    );

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
