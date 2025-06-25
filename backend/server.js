// Folder: backend/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const expenseRoutes = require('./routes/expenseRoutes');
const connectDB = require('./config/db');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/expenses', expenseRoutes);

connectDB();

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);