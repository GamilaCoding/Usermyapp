import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function ProfileCard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <h2>Sidebar Content</h2>
          <p>This is the content inside the sidebar. You can add more links or info here.</p>
        </div>
      </div>

      {/* Sidebar Toggle Button */}
      <div className="sidebar-icon" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} size="2x" color="#fff" />
      </div>

      {/* Main Content */}
      <main className="profile-page">
        <section className="hero">
          <div className="hero-overlay"></div>
          <h1>Welcome to the Profile Page</h1>
        </section>

        <section className="profile-content">
          <h2>Profile Content</h2>
          <p>This is some profile content displayed on the page.</p>
        </section>
      </main>
    </div>
  );
}

export default ProfileCard;
