import { render } from '@testing-library/react';
import Logo from '../logo';

describe('Logo component', () => {
  test('renders with the provided className', () => {
    const className = 'custom-logo-class';

    const { container } = render(<Logo className={className} />);
    // screen.debug();

    // (*) Not supported yet?
    // const logoElement = screen.getByRole('graphics-document');
    const logoElement = container.querySelector('svg');

    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveClass(className);
  });
});
