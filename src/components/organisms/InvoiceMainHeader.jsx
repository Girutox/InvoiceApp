import PropTypes from 'prop-types';

import useWindowDimensions from '../../hooks/useWindowDimensions';

import SpanCustom from '../atoms/spanCustom';
import TitleSubtitle from '../molecules/TitleSubtitle';
import Button1Default from '../organisms/buttons/button1Default';

import styles from './InvoiceMainHeader.module.scss';

const InvoiceMainHeader = ({ mainData }) => {
  const { width } = useWindowDimensions();

  let subTitle = `There are ${mainData.length} total invoices`;
  let filterTerxt = 'Filter by status';
  let newButtonText = 'New Invoice';
  if (width <= 375) {
    subTitle = `${mainData.length} total invoices`;
    filterTerxt = 'Filter';
    newButtonText = 'New';
  }

  return (
    <div className={styles.container}>
      <TitleSubtitle
        className={styles.titleSubTitleContainer}
        title="Invoices"
        subTitle={subTitle}
      />
      <div className={styles.filterGroup}>
        <SpanCustom className="body2 color-secondary-4 text-bold">{filterTerxt}</SpanCustom>
        <SpanCustom className="body2 color-primary text-bold">&#32;</SpanCustom>
      </div>
      <Button1Default spanText={newButtonText} />
    </div>
  );
};
InvoiceMainHeader.propTypes = {
  mainData: PropTypes.array
};

export default InvoiceMainHeader;
