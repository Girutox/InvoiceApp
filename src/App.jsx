import "./App.scss";
import "./fonts/Spartan-Medium.ttf";
import "./fonts/Spartan-Bold.ttf";

import DesignSystem from "./pages/designSystem";
import InvoicesGridSection from "./components/templates/InvoicesGridSection";

function App() {
  return (
    <div className="app-container">
      {/* <DesignSystem /> */}
      <InvoicesGridSection />
    </div>
  );
}

export default App;
