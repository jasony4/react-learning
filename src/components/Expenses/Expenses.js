import React from "react";
import Card from "../Card/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList/ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  const onFilterChangeHandler = (selectedYear) => {
    console.log("in Expenses.js", selectedYear);
    props.setYearFilter(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterChange={onFilterChangeHandler}
        selectedYear={props.yearFilter}
      />
      <ExpensesList items={props.items} />
    </Card>
  );
};

export default Expenses;
