import React from 'react';
import styles from './Sidebar.module.css';
import { sidebarIcons } from './sidebarIcons';
import logo from '../../assets/images/TEXOL logo.png';

const sidebarItems = [
  { key: 'home', label: 'Home' },
  { key: 'loyalty', label: 'Loyalty' },
  { key: 'customers', label: 'Customers' },
  { key: 'messages', label: 'Messages' },
  { key: 'inventory', label: 'Inventory' },
  { key: 'staff', label: 'Staff' },
  { key: 'finance', label: 'Finance' },
  { key: 'fraud', label: 'Fraud' },
  { key: 'user', label: 'User' },
  { key: 'reports', label: 'Reports' },
];

const Sidebar = ({ selected, onSelect, open }: { selected: string, onSelect: (key: string) => void, open: boolean }) => {
  return (
    <aside className={open ? styles.sidebar : `${styles.sidebar} ${styles.closed}`}>
      <div className={styles.logoSection}>
        <img src={logo} alt="Texol Logo" className={styles.logo} />
        {open && <div className={styles.companyName}>TEXOL ENERGIES</div>}
      </div>
      <ul className={styles.iconList}>
        {sidebarItems.map(item => (
          <li
            key={item.key}
            className={selected === item.key ? styles.active : ''}
            onClick={() => onSelect(item.key)}
          >
            <span className={styles.icon}>{sidebarIcons[item.key]}</span>
            {open && <span className={styles.label}>{item.label}</span>}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;