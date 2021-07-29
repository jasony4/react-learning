import React from "react";
import Card from "../Card/Card";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const mappedExpenses = props.items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      date={expense.date}
      title={expense.title}
      amount={expense.amount}
    />
  ));
  return <Card className="expenses">{mappedExpenses}</Card>;
};

export default Expenses;
