import { useEffect, useState } from 'react';
import axios from 'axios';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Dashboard from './components/Dashboard';

function App() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await axios.get('http://localhost:5000/expenses');
    setExpenses(res.data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm fetchExpenses={fetchExpenses} />
      <ExpenseList expenses={expenses} fetchExpenses={fetchExpenses} />
      <Dashboard expenses={expenses} />
    </div>
  );
}

export default App;