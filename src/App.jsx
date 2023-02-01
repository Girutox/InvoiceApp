import "./App.scss";
import "./fonts/Spartan-Medium.ttf";
import "./fonts/Spartan-Bold.ttf";

import BasicHeader from "./components/organisms/basicHeader";
import ColorDisplayBackground from "./components/atoms/colorDisplay/colorDisplayBackground";
import ColorDisplayBox from "./components/molecules/colorDisplay/colorDisplayBox";
import ColorDisplay from "./components/organisms/colorDisplay";

function App() {
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
  ];

  return (
    <div className="app-container">
      <BasicHeader />
      <main>
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
      </main>
    </div>
  );
}

export default App;
