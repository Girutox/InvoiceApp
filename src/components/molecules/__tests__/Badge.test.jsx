import { render, screen } from '@testing-library/react';
import Badge from '../Badge';

describe('Badge component', () => {
  test.skip('renders with the provided props', () => {
    const classNameBackground = 'testBackgroundClass';
    const classNameOval = 'testOvalClass';
    const classNameText = 'testTextClass';
    const badgeText = 'Dummy badge text';

    const { container } = render(
      <Badge
        classNameBackground={classNameBackground}
        classNameOval={classNameOval}
        classNameText={classNameText}
        text={badgeText}
      />
    );

    const mainContainer = container.querySelector('.container');
    const customBackgroundElement = container.querySelector(`.${classNameBackground}`);
    const ovalElement = container.querySelector(`.${classNameOval}`);
    const textElement = screen.getByText(badgeText);

    expect(mainContainer).toBeInTheDocument();

    expect(customBackgroundElement).toBeInTheDocument();
    expect(customBackgroundElement).toHaveClass('subContainer');

    expect(ovalElement).toBeInTheDocument();

    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveClass(classNameText);
  });

  test('renders paid text badge if status paid', () => {
    render(<Badge status='paid' />);

    const badgeElement = screen.getByText('Paid');
    expect(badgeElement).toBeInTheDocument();
  });

  test('renders pending text badge if status pending', () => {
    render(<Badge status='pending' />);

    const badgeElement = screen.getByText('Pending');
    expect(badgeElement).toBeInTheDocument();
  });

  test('renders draft text badge if status draft', () => {
    render(<Badge status='draft' />);

    const badgeElement = screen.getByText('Draft');
    expect(badgeElement).toBeInTheDocument();
  });

  test('renders green badge if status paid', () => {
    render(<Badge status='paid' />);

    const badgeElement = screen.getByTestId('badgeBackground');

    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass('bgc-unknown-3__opacity');
  });

  test('renders orange badge if status pending', () => {
    render(<Badge status='pending' />);

    const badgeElement = screen.getByTestId('badgeBackground');

    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass('bgc-unknown-4__opacity');
  });

  test('renders gray badge if status draft', () => {
    render(<Badge status='draft' />);

    const badgeElement = screen.getByTestId('badgeBackground');

    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass('bgc-unknown-2__opacity');
  });
});
