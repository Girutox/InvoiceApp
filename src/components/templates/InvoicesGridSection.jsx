import InvoiceGridRow from '../organisms/InvoiceGridRow';
import InvoiceMainHeader from '../organisms/InvoiceMainHeader';
import Heading1 from '../atoms/headings/heading1';
import { useSelector } from 'react-redux';

import styles from './InvoicesGridSection.module.scss';

const InvoicesGridSection = (props) => {
  const mainData = useSelector(state => state.invoice.invoices);

  return (
    <section className={styles.mainContainer}>
      <InvoiceMainHeader mainData={mainData} />
      {
        mainData.length > 0 &&
        <div className={`${styles.dataGroup}`}>
          {
            mainData?.map((item) => {
              return <InvoiceGridRow key={item.id} data={item} />;
            })
          }
        </div>
      }
      {
        mainData.length === 0 &&
        <div className={`${styles.dataGroup} ${styles.empty}`}>
          <Heading1 className="color-secondary-4">There is nothing here</Heading1>
          <p className='body2 color-secondary-2'>
            Create an invoice by clicking the<br />
            <strong>New Invoice</strong> button and get started
          </p>
        </div>
      }
    </section>
  );
};

export default InvoicesGridSection;
