import React, { useState } from "react";
import Card from "../Card/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList/ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState("2020");

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === yearFilter;
  });

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
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
