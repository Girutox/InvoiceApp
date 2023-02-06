import Badge from "../molecules/Badge";
import InvoiceGridRow from "../organisms/InvoiceGridRow";

import styles from "./InvoicesGridSection.module.scss";

const InvoicesGridSection = (props) => {
  const data = [
    {
      id: 1,
      code: "RT3080",
      dueDate: "Due  19 Aug 2021",
      user: "Jensen Huang",
      value: 1800.9,
      statusId: 1,
    },
  ];

  return (
    <div>
      <InvoiceGridRow data={data[0]} />
    </div>
  );
};

export default InvoicesGridSection;
