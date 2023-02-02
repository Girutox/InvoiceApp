import "./App.scss";
import "./fonts/Spartan-Medium.ttf";
import "./fonts/Spartan-Bold.ttf";

import BasicHeader from "./components/organisms/basicHeader";
import ColorDisplaySection from "./components/templates/colorDisplaySection";
import TypographySection from "./components/templates/typographySection";
import ButtonDisplaySection from "./components/templates/buttonDisplaySection";

function App() {
  return (
    <div className="app-container">
      <BasicHeader />
      <main>
        <ColorDisplaySection />
        <TypographySection />
        <ButtonDisplaySection />
      </main>
    </div>
  );
}

export default App;
