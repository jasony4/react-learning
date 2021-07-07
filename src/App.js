import ExpenseItem from "./components/Expenses/ExpenseItem/ExpenseItem";
import "./components/Expenses/Expenses.css";
import Card from "./components/Card/Card";
import React from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const expenses = [
    { date: new Date(2021, 2, 20), title: "Desk", amount: 75.99 },
    { date: new Date(2021, 2, 11), title: "Breakfast", amount: 10.99 },
    { date: new Date(2021, 4, 23), title: "Coffee", amount: 2.36 },
    { date: new Date(2021, 5, 10), title: "Alcohol", amount: 250.5 },
  ];

  const mappedExpenses = expenses.map((expense) => {
    const expenseKey = uuidv4();
    console.log(expenseKey);
    return (
      <ExpenseItem
        key={expenseKey}
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      />
    );
  });

  return <Card className="expenses">{mappedExpenses}</Card>;
}

export default App;
