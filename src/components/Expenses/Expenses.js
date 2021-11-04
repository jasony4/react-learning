import React from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList/ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  const onFilterChangeHandler = (selectedYear) => {
    console.log("in Expenses.js", selectedYear);
    props.setYearFilter(selectedYear);
  };
  console.log("Expenses.js", props.reduxExpenses);
  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterChange={onFilterChangeHandler}
        selectedYear={props.yearFilter}
      />
      <ExpensesList items={props.items} />
      <button onClick={props.testAction}>CLICK ME PLS</button>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    reduxExpenses: state.expenses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    testAction: () => dispatch({ type: "test" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
