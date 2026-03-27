import "./App.css";
import AddExpense from "./pages/addExpense";
import Dashboard from "./pages/dashboard";
import Settings from "./pages/settings";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/addexpense" element={<AddExpense />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
