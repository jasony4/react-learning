import React, { useState } from "react";
import { connect } from "react-redux";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import ExpensesChart from "./components/Expenses/ExpensesChart";

const DUMMY_EXPENSES = [
  { date: new Date(2021, 2, 20), title: "Desk", amount: 75.99, id: "e1" },
  {
    date: new Date(2021, 2, 11),
    title: "Breakfast",
    amount: 10.99,
    id: "e2",
  },
  {
    date: new Date(2021, 4, 23),
    title: "Not coffee",
    amount: 2.36,
    id: "e3",
  },
  { date: new Date(2021, 5, 10), title: "Alcohol", amount: 250.5, id: "e4" },
];

function App(props) {
  // eslint-disable-next-line no-unused-vars
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [yearFilter, setYearFilter] = useState("2020");
  console.log("props expenses", props.expenses);
  console.log("props jason", props.jason);
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === yearFilter;
  });
  const onAddNewExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    <>
      <NewExpense onAddNewExpense={onAddNewExpenseHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <Expenses
        yearFilter={yearFilter}
        setYearFilter={setYearFilter}
        items={filteredExpenses}
      />
      <button onClick={() => props.testAction()}>Click me pls</button>
    </>
  );
}

const dispatchTestAction = () => {
  return { type: "test" };
};

const mapDispatchToProps = (dispatch) => {
  return { testAction: () => dispatch({ type: "test" }) };
};

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    jason: state.test,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
