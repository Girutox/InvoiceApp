import "./App.scss";
import "./fonts/Spartan-Medium.ttf";
import "./fonts/Spartan-Bold.ttf";

import BasicHeader from "./components/organisms/basicHeader";
import ColorDisplaySection from "./components/templates/colorDisplaySection";

function App() {
  return (
    <div className="app-container">
      <BasicHeader />
      <main>
        <ColorDisplaySection />
      </main>
    </div>
  );
}

export default App;
