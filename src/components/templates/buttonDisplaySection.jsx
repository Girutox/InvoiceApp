import Heading2 from "../atoms/headings/heading2";
import ButtonDisplay from "../organisms/buttonDisplay";
import Button1Default from "../organisms/buttons/button1Default";
import Button2Default from "../organisms/buttons/button2Default";
import Button3Default from "../organisms/buttons/button3Default";
import Button4Default from "../organisms/buttons/button4Default";
import Button5Default from "../organisms/buttons/button5Default";
import Button6Default from "../organisms/buttons/button6Default";

import styles from "./buttonDisplaySection.module.scss";

const ButtonDisplaySection = (props) => {
  return (
    <section className={styles.container}>
      <Heading2 className={`${styles.title} color-secondary-3`}>
        Buttons
      </Heading2>
      <div className={styles.subContainer}>
        <div className={`${styles.row} ${styles["row-1"]}`}>
          <ButtonDisplay titleText="Button 1 - Default">
            <Button1Default spanText="New Invoice" />
          </ButtonDisplay>
          <ButtonDisplay titleText="Button 2 - Default">
            <Button2Default spanText="Mark as Paid" />
          </ButtonDisplay>
          <ButtonDisplay titleText="Button 3 - Default (Light/Dark)" className={styles.customWidth}>
            <Button3Default spanText="Edit" />
            <Button3Default spanText="Edit" />
          </ButtonDisplay>
        </div>
        <div className={`${styles.row} ${styles["row-2"]}`}>
          <ButtonDisplay titleText="Button 1 - Hover">
            <Button1Default spanText="New Invoice" applyHover={true} />
          </ButtonDisplay>
          <ButtonDisplay titleText="Button 2 - Hover">
            <Button2Default spanText="Mark as Paid" applyHover={true} />
          </ButtonDisplay>
          <ButtonDisplay titleText="Button 3 - Hover (Light/Dark)" className={styles.customWidth}>
            <Button3Default spanText="Edit" applyHover={true} />
            <Button3Default spanText="Edit" applyHover={true} />
          </ButtonDisplay>
        </div>
        <div className={`${styles.row} ${styles["row-3"]}`}>
          <ButtonDisplay titleText="Button 4 - Default (Light/Dark)">
            <Button4Default spanText="Save as Draft" />
            <Button4Default spanText="Save as Draft" />
          </ButtonDisplay>
          <ButtonDisplay titleText="Button 5 - Default">
            <Button5Default spanText="Delete" />
          </ButtonDisplay>
          <ButtonDisplay titleText="Button 6 - Default">
            <Button6Default spanText="+ Add New Item" />
          </ButtonDisplay>
        </div>
        <div className={`${styles.row} ${styles["row-4"]}`}>
          <ButtonDisplay titleText="Button 4 - Hover (Light/Dark)">
            <Button4Default spanText="Save as Draft" applyHover={true} />
            <Button4Default spanText="Save as Draft" applyHover={true} />
          </ButtonDisplay>
          <ButtonDisplay titleText="Button 5 - Hover">
            <Button5Default spanText="Delete" applyHover={true} />
          </ButtonDisplay>
          <ButtonDisplay titleText="Button 6 - Hover">
            <Button6Default spanText="+ Add New Item" applyHover={true} />
          </ButtonDisplay>
        </div>
      </div>
    </section>
  );
};

export default ButtonDisplaySection;
