import styles from './ViewInvoiceSection.module.scss';
import InvoiceToolbar from '../organisms/InvoiceToolbar';
import InvoiceInfoGroup from '../organisms/InvoiceInfoGroup';

import { formatDateToString } from '../../utils/utils';

const ViewInvoiceSection = () => {
  const data = {
    code: 'XM9141',
    projectDescription: 'Graphic Design',
    billFromStreetAddress: '19 Union Terrace',
    billFromCity: 'London',
    billFromPostCode: 'E1 3EZ',
    billFromCountry: 'United Kingdom',
    billToStreetAddress: '84 Church Way',
    billToCity: 'Bradford',
    billToPostCode: 'BD1 9PB',
    billToCountry: 'United Kingdom',
    invoiceDate: formatDateToString('', new Date(2021, 7, 21)),
    paymentDue: formatDateToString('', new Date(2021, 8, 20)),
    billTo: 'Alex Grim',
    sentTo: 'alexgrim@mail.com',
    detailRows: [
      {
        id: 1,
        itemName: 'Banner Design',
        itemQuantity: 1,
        itemPrice: 156
      },
      {
        id: 2,
        itemName: 'Email Design',
        itemQuantity: 2,
        itemPrice: 200
      }
    ]
  };

  return (
    <div className={styles.container}>
      <InvoiceToolbar statusId={2} id={1} />
      <InvoiceInfoGroup data={data} />
    </div>
  );
};

export default ViewInvoiceSection;
