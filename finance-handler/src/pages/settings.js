import React, { useState } from "react";
import "../styles/settings.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "./navbar";

function Settings() {
  const [user, setUser] = useState({
    username: "Nainika_Dev",
    fullName: "Nainika Pathak",
    email: "nainika@example.com",
    currency: "INR (₹)",
    notifications: true,
  });

  return (
    <div className="settings-container">
      <Navbar />
      <h1 className="settings-title">Account Settings</h1>

      <div className="settings-layout">
        {/* Profile Sidebar */}
        <div className="profile-card">
          <div className="profile-image">{user.fullName.charAt(0)}</div>
          <h3>{user.fullName}</h3>
          <p className="user-role">Premium Member</p>
          <hr />
          <div className="account-status">
            <span>Status: </span>
            <span className="status-badge">Active</span>
          </div>
          <button className="logout-btn">Logout</button>
        </div>

        {/* Settings Form */}
        <div className="settings-content">
          <section className="settings-section">
            <h4>General Information</h4>
            <Row className="mt-4">
              <Col md={6}>
                <label>Username</label>
                <input type="text" value={user.username} readOnly />
              </Col>
              <Col md={6}>
                <label>Email Address</label>
                <input type="email" value={user.email} readOnly />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={6}>
                <label>Full Name</label>
                <input type="text" value={user.fullName} />
              </Col>
              <Col md={6}>
                <label>Preferred Currency</label>
                <select className="settings-select">
                  <option>INR (₹)</option>
                  <option>USD ($)</option>
                  <option>EUR (€)</option>
                </select>
              </Col>
            </Row>
          </section>

          <section className="settings-section mt-5">
            <h4>Security & Preferences</h4>
            <div className="preference-item">
              <div>
                <p className="pref-title">Email Notifications</p>
                <p className="pref-desc">Receive weekly expense summaries</p>
              </div>
              <input type="checkbox" checked={user.notifications} readOnly />
            </div>
            <button className="update-btn">Save Changes</button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Settings;
