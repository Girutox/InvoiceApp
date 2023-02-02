import Heading2 from "../atoms/headings/heading2";
import ControlDisplay from "../../components/organisms/controlDisplay";
import InputControl from "../../components/atoms/inputControl";

import styles from "./formElementsDisplaySection.module.scss";

const FormElementsDisplaySection = (props) => {
  return (
    <section className={styles.container}>
      <Heading2 className={`${styles.title} color-secondary-3`}>
        Form Elements Light
      </Heading2>
      <div className={styles.subContainer}>
        <div className={`${styles.row} ${styles["row-1"]}`}>
          <ControlDisplay
            spanText="Text Field - Default"
            controlLabelText="Streed Address"
            controlId="textFieldDemo1"
          >
            <InputControl controlId="textFieldDemo1" />
          </ControlDisplay>
        </div>
        <div className={`${styles.row} ${styles["row-2"]}`}>
          <ControlDisplay
            spanText="Text Field - Filled"
            controlLabelText="Streed Address"
            controlId="textFieldDemo2"
          >
            <InputControl controlId="textFieldDemo2" value="Lorem Ipsum Dolor" />
          </ControlDisplay>
        </div>
        <div className={`${styles.row} ${styles["row-3"]}`}>
          <ControlDisplay
            spanText="Text Field - Active"
            controlLabelText="Streed Address"
            controlId="textFieldDemo3"
          >
            <InputControl controlId="textFieldDemo3" value="Currently typing" includeActive={true} />
          </ControlDisplay>
        </div>
      </div>
    </section>
  );
};

export default FormElementsDisplaySection;
