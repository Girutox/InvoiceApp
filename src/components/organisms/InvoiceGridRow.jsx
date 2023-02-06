import SpanCustom from '../atoms/spanCustom';
import Badge from '../molecules/Badge';

import styles from './InvoiceGridRow.module.scss';

const InvoiceGridRow = (props) => {
  const {id, code, dueDate, user, value, statusId} = props.data;

  return (
    <div key={id} className={`${styles.container} bgc-white`}>
      <SpanCustom className="body2 color-secondary-4 text-bold">{code}</SpanCustom>
      <SpanCustom className="body2 color-secondary-2">{dueDate}</SpanCustom>
      <SpanCustom className="body2 color-secondary-2">{user}</SpanCustom>
      <SpanCustom className="body2 color-secondary-4 text-bold">{value}</SpanCustom>
      {statusId === 1 && <Badge
        classNameBackground="bgc-unknown-2__opacity"
        classNameOval="bgc-unknown-2"
        classNameText="body2 color-unknown-2 text-bold"
        text="Draft"
      />}
      {statusId === 2 && <Badge
        classNameBackground="bgc-unknown-4__opacity"
        classNameOval="bgc-unknown-4"
        classNameText="body2 color-unknown-4 text-bold"
        text="Pending"
      />}
      {statusId === 3 && <Badge
        classNameBackground="bgc-unknown-3__opacity"
        classNameOval="bgc-unknown-3"
        classNameText="body2 color-unknown-3 text-bold"
        text="Paid"
      />}
      <SpanCustom className="body2 color-primary text-bold">&#32;</SpanCustom>
    </div>
  );
}
 
export default InvoiceGridRow;