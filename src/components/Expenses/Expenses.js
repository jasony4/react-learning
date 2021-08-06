import React, { useState } from "react";
import Card from "../Card/Card";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState("2020");
  const mappedExpenses = props.items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      date={expense.date}
      title={expense.title}
      amount={expense.amount}
    />
  ));

  const onFilterChangeHandler = (selectedYear) => {
    console.log("in Expenses.js", selectedYear);
    setYearFilter(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterChange={onFilterChangeHandler}
        selectedYear={yearFilter}
      />
      {mappedExpenses}
    </Card>
  );
};

export default Expenses;
