import './App.scss';
import './fonts/Spartan-Medium.ttf';
import './fonts/Spartan-Bold.ttf';

import { Routes, Route, useNavigate } from 'react-router-dom';

import DesignSystem from './pages/designSystem';
import InvoiceMain from './pages/InvoiceMain';

import Logo from './components/atoms/logo';
import { ReactComponent as Moon } from './assets/icon-moon.svg';
import avatar from './assets/image-avatar.jpg';
import InvoiceViewDetail from './pages/InvoiceViewDetail';

function App() {
  const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route path="/" element={
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
                <div className="app-leftside-avatar" onClick={() => navigate('/designSystem')}>
                  <img src={avatar} width={40} height={40} alt="" />
                </div>
              </div>
            </div>
            <InvoiceMain />
          </div>
        } />
        <Route path="/viewInvoice/:id" element={
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
                <div className="app-leftside-avatar" onClick={() => navigate('/designSystem')}>
                  <img src={avatar} width={40} height={40} alt="" />
                </div>
              </div>
            </div>
            <InvoiceViewDetail />
          </div>
        } />
        <Route path="/designSystem" element={<DesignSystem />} />
      </Routes>
    </>
  );
}

export default App;
