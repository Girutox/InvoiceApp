import InvoiceGridRow from '../organisms/InvoiceGridRow';
import { mainData } from '../../models/invoiceMainData';

import styles from './InvoicesGridSection.module.scss';
import InvoiceMainHeader from '../organisms/InvoiceMainHeader';

const InvoicesGridSection = (props) => {
  return (
    <section className={styles.mainContainer}>
      <InvoiceMainHeader mainData={mainData} />
      {mainData?.map((item) => {
        return <InvoiceGridRow key={item.id} data={item} />;
      })}
    </section>
  );
};

export default InvoicesGridSection;
