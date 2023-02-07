import SpanCustom from "../atoms/spanCustom";
import TitleSubtitle from "../molecules/TitleSubtitle";
import Button1Default from "../organisms/buttons/button1Default";

import styles from "./InvoiceMainHeader.module.scss";

const InvoiceMainHeader = (props) => {
  return (
    <div className={styles.container}>
      <TitleSubtitle className={styles.titleSubTitleContainer}
        title="Invoices"
        subTitle={`There are ${props.mainData.length} total invoices`}
      />
      <div className={styles.filterGroup}>
        <SpanCustom className="body2 color-secondary-4 text-bold">
          Filter by status
        </SpanCustom>
        <SpanCustom className="body2 color-primary text-bold">&#32;</SpanCustom>
      </div>
      <Button1Default spanText="New Invoice" />
    </div>
  );
};

export default InvoiceMainHeader;
