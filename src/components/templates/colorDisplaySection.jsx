import Heading2 from "../atoms/headings/heading2";
import ColorDisplay from "../organisms/colorDisplay";
import { mainData } from "../../models/designSystemColors";

import styles from "./colorDisplaySection.module.scss";

const ColorDisplaySection = (props) => {
  return (
    <section className={styles.container}>
      <Heading2 className={`${styles.title} color-secondary-3`}>
        Colors
      </Heading2>
      <div className={styles.subContainer}>
        {mainData?.map((item) => {
            return (
              <ColorDisplay
                key={item.id}
                classNameLabel1={item.classNameLabel1}
                backgroundColor={item.backgroundColor}
                hexColorText={item.hexColorText}
                subData={item.subData}
              />
            );
          })}
      </div>
    </section>
  );
};

export default ColorDisplaySection;
