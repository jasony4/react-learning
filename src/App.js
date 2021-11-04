import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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

function App() {
  const reduxData = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("REDUX STATE", reduxData);
  // eslint-disable-next-line no-unused-vars
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [yearFilter, setYearFilter] = useState("2020");

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === yearFilter;
  });
  const onAddNewExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  const testDispatchHandler = () => {
    dispatch({ type: "test" });
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
      <button onClick={testDispatchHandler}>TEST DISPATCH</button>
    </>
  );
}

export default App;
