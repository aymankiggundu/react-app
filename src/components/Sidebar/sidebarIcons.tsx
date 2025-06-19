import { FaHome, FaGift, FaUsers, FaEnvelope, FaBoxes, FaUserTie, FaMoneyBill, FaShieldAlt, FaUser, FaChartBar } from 'react-icons/fa';

export const sidebarIcons: { [key: string]: JSX.Element } = {
  home: <FaHome />,
  loyalty: <FaGift />,
  customers: <FaUsers />,
  messages: <FaEnvelope />,
  inventory: <FaBoxes />,
  staff: <FaUserTie />,
  finance: <FaMoneyBill />,
  fraud: <FaShieldAlt />,
  user: <FaUser />,
  reports: <FaChartBar />,
};
