import PropTypes from 'prop-types';

import SpanCustom from '../atoms/spanCustom';
import Badge from '../molecules/Badge';

import styles from './InvoiceToolbar.module.scss';
import Button5Default from './buttons/button5Default';
import Button2Default from './buttons/button2Default';
import Button3Default from './buttons/button3Default';

const InvoiceToolbar = ({ statusId, id }) => {
  InvoiceToolbar.propTypes = {
    statusId: PropTypes.number,
    id: PropTypes.number
  };

  return (
    <div className={styles.container}>
      <div className={styles.infoGroup}>
        <SpanCustom className="body1 color-secondary-2 text-bold">Status</SpanCustom>
        {statusId === 1 && (
          <Badge
            key={`b1${id}`}
            classNameBackground="bgc-unknown-2__opacity"
            classNameOval="bgc-unknown-2"
            classNameText="body2 color-unknown-2 text-bold"
            text="Draft"
          />
        )}
        {statusId === 2 && (
          <Badge
            key={`b1${id}`}
            classNameBackground="bgc-unknown-4__opacity"
            classNameOval="bgc-unknown-4"
            classNameText="body2 color-unknown-4 text-bold"
            text="Pending"
          />
        )}
        {statusId === 3 && (
          <Badge
            key={`b1${id}`}
            classNameBackground="bgc-unknown-3__opacity"
            classNameOval="bgc-unknown-3"
            classNameText="body2 color-unknown-3 text-bold"
            text="Paid"
          />
        )}
      </div>
      <div className={styles.buttonGroup}>
        <Button3Default spanText="Edit" />
        <Button5Default spanText="Delete" />
        <Button2Default spanText="Mark as Paid" />
      </div>
    </div>
  );
};

export default InvoiceToolbar;
