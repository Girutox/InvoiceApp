import './App.scss';
import './fonts/Spartan-Medium.ttf';
import './fonts/Spartan-Bold.ttf';

import DesignSystem from './pages/designSystem';
import InvoiceMain from './pages/InvoiceMain';
import ViewInvoiceSection from './components/templates/ViewInvoiceSection';

import Logo from './components/atoms/logo';
import { ReactComponent as Moon } from './assets/icon-moon.svg';
import avatar from './assets/image-avatar.jpg';
import InvoiceViewDetail from './pages/InvoiceViewDetail';

function App() {
  return (
    <div className="app-container">
      <div className="app-leftside">
        <div className="app-leftside-complexLogo">
          <div style={{ zIndex: '1' }}>
            <Logo className="fill-white logoResize__sm" />
          </div>
          <div className="app-lefside-backdrop"></div>
        </div>
        <div className="app-leftside-maincontent">
          <Moon className="" />
        </div>
        <div className="app-leftside-avatarContent">
          <div className="app-leftside-avatar">
            <img src={avatar} width={40} height={40} alt="" />
          </div>
        </div>
      </div>
      {/* <DesignSystem /> */}
      {/* <InvoiceMain /> */}
      <InvoiceViewDetail />
    </div>
  );
}

export default App;
