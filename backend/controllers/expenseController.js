const Expense = require('../models/Expense');

exports.getExpenses = async (req, res) => {
  const expenses = await Expense.find();
  res.json(expenses);
};

exports.createExpense = async (req, res) => {
  const newExpense = new Expense(req.body);
  await newExpense.save();
  res.json(newExpense);
};

exports.updateExpense = async (req, res) => {
  const updated = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteExpense = async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted successfully' });
};