import React from "react";
import "../styles/dashboard.css";
import LineChart from "../charts/line";
import DonutChart from "../charts/donut";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "./navbar";
function Dashboard() {
  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "left", color: "white" }}>Hello Nainika!</h1>
      <div className="dashboard">
        <div>
          <div className="curr-expenses">
            <div className="card">
              <div>542441187963</div>
              <div>Master Card</div>
            </div>
            <div
              className="wallet"
              style={{
                fontFamily: "'Anton', sans-serif",
                color: "rgba(255, 255, 255, 0.696)",
              }}
            >
              Wallet
              <div
                className="color:white"
                style={{
                  fontFamily: "sans-serif",
                  color: "white",
                  fontSize: "35px",
                }}
              >
                Rs. 45120.32
              </div>
            </div>
          </div>
          <div className="comparison">
            <div className="curr-savings">
              <LineChart />
            </div>
            <div className="graph">
              <DonutChart />
            </div>
          </div>
        </div>
        <div className="transaction-history">
          <Col>
            <Row>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "25px",
                  fontFamily: "sans-serif",
                }}
              >
                Receipts
              </div>
              <hr />
            </Row>
            <Row className="transaction-history-row d-flex color-white">
              <div className="color-white">₹ 500</div>
              <div>₹1251</div>
              <div>₹ 4500</div>
              <div>₹ 88500</div>
            </Row>
            <Row>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "25px",
                  fontFamily: "sans-serif",
                }}
              >
                Payables
              </div>
              <hr />
            </Row>
            <Row className="transaction-history-row d-flex color-white">
              <div>₹ 400</div>
              <div>₹ 45100</div>

              <div>₹ 8500</div>
            </Row>
          </Col>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
