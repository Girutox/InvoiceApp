import "./App.scss";
import "./fonts/Spartan-Medium.ttf";
import "./fonts/Spartan-Bold.ttf";

import BasicHeader from "./components/organisms/basicHeader";
import ColorDisplayBackground from "./components/atoms/colorDisplay/colorDisplayBackground";

function App() {
  return (
    <div className="app-container">
      <BasicHeader />
      <main>
        <ColorDisplayBackground backgroundColor="bgc-primary" />
        <ColorDisplayBackground backgroundColor="bgc-primary-2" />
        <ColorDisplayBackground backgroundColor="bgc-primary-3" />
        <ColorDisplayBackground backgroundColor="bgc-primary-4" />
      </main>
    </div>
  );
}

export default App;
