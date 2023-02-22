import './App.scss';
import './fonts/Spartan-Medium.ttf';
import './fonts/Spartan-Bold.ttf';

import { Routes, Route } from 'react-router-dom';

import DesignSystem from './pages/designSystem';
import InvoiceMain from './pages/InvoiceMain';

import InvoiceViewDetail from './pages/InvoiceViewDetail';
import LeftSideBar from './components/organisms/LeftSideBar';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <div className="app-container">
            <LeftSideBar />
            <InvoiceMain />
          </div>
        } />
        <Route path="/viewInvoice/:id" element={
          <div className="app-container">
            <LeftSideBar />
            <InvoiceViewDetail />
          </div>
        } />
        <Route path="/designSystem" element={<DesignSystem />} />
      </Routes>
    </>
  );
}

export default App;
