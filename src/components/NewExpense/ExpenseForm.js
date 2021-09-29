import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  console.log("component props", props);
  /*   const [form, setForm] = useState({
    title: "12345",
    amount: "abcde",
    date: ",./;'",
  });

  const inputChangeHandler = (event) => {
    let spreadForm = { ...form };
    const stateValue = event.target.name;
    spreadForm[stateValue] = event.target.value;
    setForm((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  }; */
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");
  const onTitleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const onAmountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const onDateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const clearForm = () => {
    setTitle("");
    setAmount("");
    setDate("");
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: Number(enteredAmount),
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData); // pass in the expense data created on line 37
    clearForm();
  };

  const formIsValid = [enteredTitle, enteredDate, enteredAmount].some(
    (value) => {
      return value.trim().length !== 0;
    }
  );

  console.log(enteredTitle.trim().length === 0);
  console.log("formIsValid", formIsValid);

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              onChange={onTitleChangeHandler}
              type="text"
              name="title"
              value={enteredTitle}
              style={{
                border:
                  enteredTitle.trim().length === 0
                    ? "4px solid red"
                    : "0px transparent",
              }}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              name="amount"
              onChange={onAmountChangeHandler}
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              name="date"
              onChange={onDateChangeHandler}
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button
            disabled={!formIsValid}
            type="submit"
            onClick={onSubmitHandler}
          >
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
