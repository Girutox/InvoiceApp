import "./App.scss";
import "./fonts/Spartan-Medium.ttf";
import "./fonts/Spartan-Bold.ttf";

import BasicHeader from "./components/organisms/basicHeader";
import ColorDisplaySection from "./components/templates/colorDisplaySection";
import TypographySection from "./components/templates/typographySection";
import Button1Default from "./components/organisms/buttons/button1Default";
import Button2Default from "./components/organisms/buttons/button2Default";
import Button3Default from "./components/organisms/buttons/button3Default";

function App() {
  return (
    <div className="app-container">
      <BasicHeader />
      <main>
        <ColorDisplaySection />
        <TypographySection />

        <Button1Default spanText="New Invoice"/>
        <Button2Default spanText="New Invoice"/>
        <Button3Default spanText="Edit" />
      </main>
    </div>
  );
}

export default App;
