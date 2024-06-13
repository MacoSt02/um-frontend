import React from 'react';
import '../css/Sidebar.css';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button onClick={toggleSidebar} className="toggle-button">
        {isOpen ? 'Hide' : 'Show'} Sidebar
      </button>
      <ul>
        <li>Dashboard</li>
        <li>Users</li>
        <li>Settings</li>
        <li>Profile</li>
      </ul>
    </div>
  );
};

export default Sidebar;
