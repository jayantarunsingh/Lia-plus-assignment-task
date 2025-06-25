import axios from 'axios';

function ExpenseList({ expenses, fetchExpenses }) {
  const deleteExpense = async id => {
    await axios.delete(`http://localhost:5000/expenses/${id}`);
    fetchExpenses();
  };

  return (
    <ul>
      {expenses.map(exp => (
        <li key={exp._id}>
          ₹{exp.amount} - {exp.category} - {exp.description} - {new Date(exp.date).toDateString()}
          <button onClick={() => deleteExpense(exp._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
