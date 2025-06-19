import React, { useState } from 'react';
import Button from "./components/Button";
import Alert from "./components/Alert";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Tabs from "./components/Tabs/Tabs";
import Loader from "./components/Common/Loader";
import Card from "./components/Common/Card";
import Modal from "./components/Common/Modal";
import Home from "./pages/Home/Home";
import Loyalty from "./pages/Loyalty/Loyalty";
import Customers from "./pages/CustomerManagement/Customers";
import Messages from "./pages/Messages/Messages";
import Inventory from "./pages/Inventory/Inventory";
import StaffManagement from "./pages/StaffManagement";
import FinanceManagement from "./pages/FinanceManagement";
import FraudManagement from "./pages/FraudManagement";
import UserManagement from "./pages/UserManagement";
import Reports from "./pages/Reports";
import DashboardLayout from "./layouts/DashboardLayout";
import AppRoutes from "./routes/AppRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const pageComponents: { [key: string]: React.ReactNode } = {
  home: <Home />,
  loyalty: <Loyalty />,
  customers: <Customers />,
  messages: <Messages />,
  inventory: <Inventory />,
  staff: <StaffManagement />,
  finance: <FinanceManagement />,
  fraud: <FraudManagement />,
  user: <UserManagement />,
  reports: <Reports />,
};

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [selectedPage, setSelectedPage] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Move the toggle button with the sidebar
  const toggleButtonStyle = {
    position: 'fixed' as const,
    top: 20,
    left: sidebarOpen ? 220 : 20,
    zIndex: 1100,
    background: '#222e3c',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    transition: 'left 0.3s',
  };

  return (
    <DashboardLayout>
      <button style={toggleButtonStyle} onClick={() => setSidebarOpen(!sidebarOpen)}>
        <span className="navbar-toggler-icon">☰</span>
      </button>
      <Sidebar selected={selectedPage} onSelect={setSelectedPage} open={sidebarOpen} />
      <div className="my-div" style={{ marginLeft: sidebarOpen ? 220 : 0, transition: 'margin-left 0.3s' }}>
        {alertVisible && <Alert onClose={() => setAlertVisible(false)}>WANT TO LEAVE!</Alert>}
        <h1>TEXOL ENERGIES</h1>
        <Button color="react" onClick={() => setAlertVisible(true)}>THANK YOU</Button>
        {pageComponents[selectedPage]}
      </div>
    </DashboardLayout>
  );
}
export default App;