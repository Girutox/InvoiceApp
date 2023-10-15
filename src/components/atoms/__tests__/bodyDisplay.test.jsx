import { render } from '@testing-library/react';
import BodyDisplay from '../bodyDisplay';

test('renders p element component with the provided className', () => {
  // NOTAS: Actualmente seleccionar por un elemento "p" no está permitido.
  // Uso QUERYSELECTOR en lugar de SCREEN como WORKAROUND.

  const className = 'custom-class';

  const { container } = render(<BodyDisplay className={className} />);
  const bodyDisplayElement = container.querySelector('p');

  expect(bodyDisplayElement).toBeInTheDocument();
  expect(bodyDisplayElement).toHaveClass(className);
});
