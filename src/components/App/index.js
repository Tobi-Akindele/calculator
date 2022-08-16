import { Link, Outlet } from "react-router-dom";
import { useState } from 'react';
import logo from '../../logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
       <h1><Link to="/">Bookkeeper</Link></h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
