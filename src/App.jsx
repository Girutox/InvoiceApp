import "./App.scss";
import "./fonts/Spartan-Medium.ttf";
import "./fonts/Spartan-Bold.ttf";

import BasicHeader from "./components/organisms/basicHeader";
import ColorDisplayBackground from "./components/atoms/colorDisplay/colorDisplayBackground";
import ColorDisplayBox from "./components/molecules/colorDisplay/colorDisplayBox";
import ColorDisplay from "./components/organisms/colorDisplay";

function App() {
  return (
    <div className="app-container">
      <BasicHeader />
      <main>
        <ColorDisplay
          classNameLabel1="color-white"
          backgroundColor="bgc-primary"
          hexColorText="#7C5DFA"
          classNameLabel2="color-secondary-2"
          classNameLabel3="color-secondary-4"
          colorType="RGB"
          colorValue="124, 93, 250"
        ></ColorDisplay>
      </main>
    </div>
  );
}

export default App;
