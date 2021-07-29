import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (expenseData) => {
    const newExpense = {
      ...expenseData,
      id: Math.ceil(Math.random() * 100000).toString(),
    };
    props.onAddNewExpense(newExpense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
