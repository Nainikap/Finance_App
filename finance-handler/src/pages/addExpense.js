import "../styles/AddExpense.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "./navbar";
const pastExpenses = [
  { name: "electricity bill", amt: 2400, date: "24/2/26" },
  { name: "water bill", amt: 1200, date: "20/2/26" },
  { name: "internet bill", amt: 999, date: "18/2/26" },
  { name: "rent", amt: 15000, date: "01/2/26" },
];

function AddExpense() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("paid");
  const [resume, setResume] = useState(null);
  const [date, setDate] = useState("");
  const [about, setAbout] = useState("");

  const [newExpense, setNewExpense] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const expense = {
      type: name,
      amt: amount,
      tareek: date,
    };

    setNewExpense((prev) => [...prev, expense]);

    handleReset();
  };

  const handleReset = () => {
    setName("");
    setAmount("");
    setStatus("paid");
    setDate("");
    setAbout("");
    setResume(null);
  };

  return (
    <>
      <Navbar />
      <div className="expenses">
        <div className="add-expense">
          <fieldset>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name of expense"
                required
              />
              <label htmlFor="amount">Enter amount*</label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                required
              />
              <label>Status*</label>
              <input
                type="radio"
                value="paid"
                checked={status === "paid"}
                onChange={(e) => setStatus(e.target.value)}
              />
              Paid
              <input
                type="radio"
                value="unpaid"
                checked={status === "unpaid"}
                onChange={(e) => setStatus(e.target.value)}
              />
              Unpaid
              <label htmlFor="file">Upload Invoice</label>
              <input
                type="file"
                id="file"
                onChange={(e) => setResume(e.target.files[0])}
              />
              <label htmlFor="date">Enter Date*</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
              <label htmlFor="about">About</label>
              <textarea
                id="about"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                placeholder="About the transaction"
              ></textarea>
              <button type="reset" onClick={handleReset}>
                Reset
              </button>
              <button type="submit">Submit</button>
            </form>
          </fieldset>
        </div>
        <div className="transactions">
          <h3>New Expenses</h3>
          {newExpense.map((expense, index) => (
            <Row key={index}>
              <Col>{expense.type}</Col>
              <Col>{expense.amt}</Col>
              <Col>{expense.tareek}</Col>
            </Row>
          ))}

          <h3>Past Expenses</h3>
          {pastExpenses.map((expense, index) => (
            <Row key={index}>
              <Col>{expense.name}</Col>
              <Col>{expense.amt}</Col>
              <Col>{expense.date}</Col>
            </Row>
          ))}
        </div>
      </div>
    </>
  );
}

export default AddExpense;
