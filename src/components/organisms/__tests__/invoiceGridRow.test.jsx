import { render, screen } from '@testing-library/react';
import InvoiceGridRow from '../InvoiceGridRow';
import { months } from '../../../models/months';

describe('Invoice Grid Row Organism', () => {
  const item = {
    id: 1,
    code: 'RT3080',
    dueDate: new Date(2021, 7, 19),
    user: 'Jensen Huang',
    value: 1800.9
  };

  it('should render the CODE field correctly', () => {
    render(<InvoiceGridRow key={item.id} data={item} />);
    const codeSpan = screen.getByText(/RT3080/i);

    expect(codeSpan).toBeInTheDocument();
  });

  it('should render the DATE field correctly', () => {
    render(<InvoiceGridRow key={item.id} data={item} />);

    const month = months[item.dueDate.getMonth()].substring(0, 3);

    const dateSpan = screen.getByText(`Due 19 ${month} 2021`);

    expect(dateSpan).toBeInTheDocument();
  });

  it('should render the USER field correctly', () => {
    render(<InvoiceGridRow key={item.id} data={item} />);

    const userSpan = screen.getByText('Jensen Huang');

    expect(userSpan).toBeInTheDocument();
  });

  it('should render the VALUE field correctly', () => {
    render(<InvoiceGridRow key={item.id} data={item} />);

    const valueSpan = screen.getByText('$1,800.9');

    expect(valueSpan).toBeInTheDocument();
  });

  it('should render the STATUS field correctly (Draft)', () => {
    item.statusId = 1;
    render(<InvoiceGridRow key={item.id} data={item} />);

    const statusSpan = screen.getByText('Draft');

    expect(statusSpan).toBeInTheDocument();
  });

  it('should render the STATUS field correctly (Pending)', () => {
    item.statusId = 2;
    render(<InvoiceGridRow key={item.id} data={item} />);

    const statusSpan = screen.getByText('Pending');

    expect(statusSpan).toBeInTheDocument();
  });

  it('should render the STATUS field correctly (Paid)', () => {
    item.statusId = 3;
    render(<InvoiceGridRow key={item.id} data={item} />);

    const statusSpan = screen.getByText('Paid');

    expect(statusSpan).toBeInTheDocument();
  });
});
