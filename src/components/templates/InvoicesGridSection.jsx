import InvoiceGridRow from "../organisms/InvoiceGridRow";
import {mainData} from '../../models/invoiceMainData';

import styles from "./InvoicesGridSection.module.scss";

const InvoicesGridSection = (props) => {
  return (
    <section className={styles.sectionMain}>
      {mainData?.map(item => {
        return <InvoiceGridRow key={item.id} data={item} />
      })}
    </section>
  );
};

export default InvoicesGridSection;
