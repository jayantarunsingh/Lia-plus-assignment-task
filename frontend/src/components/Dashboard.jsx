import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';
ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement);

function Dashboard({ expenses }) {
  const categories = {};
  const months = {};

  expenses.forEach(e => {
    categories[e.category] = (categories[e.category] || 0) + e.amount;
    const month = new Date(e.date).toLocaleString('default', { month: 'short' });
    months[month] = (months[month] || 0) + e.amount;
  });

  return (
    <div>
      <h3>Category-wise (Pie)</h3>
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <Pie
          data={{
            labels: Object.keys(categories),
            datasets: [{ data: Object.values(categories), backgroundColor: ['#f00', '#0f0', '#00f'] }]
          }}
          options={{
            responsive: true,
            maintainAspectRatio: true
          }}
        />
      </div>

      <h3>Monthly (Bar)</h3>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Bar
          data={{
            labels: Object.keys(months),
            datasets: [{ label: 'Monthly Expense', data: Object.values(months), backgroundColor: '#36a2eb' }]
          }}
          options={{
            responsive: true,
            maintainAspectRatio: true
          }}
        />
      </div>
    </div>
  );
}

export default Dashboard;
