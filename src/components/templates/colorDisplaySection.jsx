import Heading2 from "../atoms/headings/heading2";
import ColorDisplay from "../organisms/colorDisplay";

import styles from "./colorDisplaySection.module.scss";

const ColorDisplaySection = (props) => {
  const mainData = [
    {
      id: 1,
      classNameLabel1: "color-white",
      backgroundColor: "bgc-primary",
      hexColorText: "#7C5DFA",
      subData: [
        {
          id: 1,
          classNameLabel2: "color-secondary-2",
          colorType: "RGB",
          colorValue: "124, 93, 250",
        },
        {
          id: 2,
          classNameLabel2: "color-secondary-2",
          colorType: "HSL",
          colorValue: "252°, 94%, 67%",
        },
      ],
    },
    {
      id: 2,
      classNameLabel1: "color-white",
      backgroundColor: "bgc-primary-2",
      hexColorText: "#9277FF",
      subData: [
        {
          id: 1,
          classNameLabel2: "color-secondary-2",
          colorType: "RGB",
          colorValue: "146, 119, 255",
        },
        {
          id: 2,
          classNameLabel2: "color-secondary-2",
          colorType: "HSL",
          colorValue: "252°, 100%, 73%",
        },
      ],
    },
    {
      id: 3,
      classNameLabel1: "color-white",
      backgroundColor: "bgc-primary-3",
      hexColorText: "#1E2139",
      subData: [
        {
          id: 1,
          classNameLabel2: "color-secondary-2",
          colorType: "RGB",
          colorValue: "30, 33, 57",
        },
        {
          id: 2,
          classNameLabel2: "color-secondary-2",
          colorType: "HSL",
          colorValue: "233°, 31%, 17%",
        },
      ],
    },
    {
      id: 4,
      classNameLabel1: "color-white",
      backgroundColor: "bgc-primary-4",
      hexColorText: "#252945",
      subData: [
        {
          id: 1,
          classNameLabel2: "color-secondary-2",
          colorType: "RGB",
          colorValue: "37, 41, 69",
        },
        {
          id: 2,
          classNameLabel2: "color-secondary-2",
          colorType: "HSL",
          colorValue: "233, 30%, 21%",
        },
      ],
    },
    {
      id: 5,
      classNameLabel1: "color-secondary-3",
      backgroundColor: "bgc-secondary",
      hexColorText: "#DFE3FA",
      subData: [
        {
          id: 1,
          classNameLabel2: "color-secondary-2",
          colorType: "RGB",
          colorValue: "223, 227, 250",
        },
        {
          id: 2,
          classNameLabel2: "color-secondary-2",
          colorType: "HSL",
          colorValue: "231, 73%, 93%",
        },
      ],
    },
  ];

  return (
    <section className={styles.container}>
      <Heading2 className={`${styles.title} color-secondary-3`}>Colors</Heading2>
      <div className={styles.subContainer}>
        {mainData &&
          mainData.map((item) => {
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
