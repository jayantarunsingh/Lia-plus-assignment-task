import { useState } from 'react';
import axios from 'axios';

function ExpenseForm({ fetchExpenses }) {
  const [form, setForm] = useState({ amount: '', category: '', description: '', date: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/expenses', form);
    setForm({ amount: '', category: '', description: '', date: '' });
    fetchExpenses();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="amount" value={form.amount} onChange={handleChange} placeholder="Amount" required />
      <input name="category" value={form.category} onChange={handleChange} placeholder="Category" required />
      <input name="description" value={form.description} onChange={handleChange} placeholder="Description" required />
      <input type="date" name="date" value={form.date} onChange={handleChange} required />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;