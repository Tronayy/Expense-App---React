import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  var [n, setN] = useState(0);

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const reset = () => {
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setN(0);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    reset();
    // setEnteredTitle("");
    // setEnteredAmount("");
    // setEnteredDate("");
    // setN(0);
  };

  const newFormHandler = (event) => {
    event.preventDefault();
    setN(1);
  };

  if (n === 0) {
    return (
      <form className="center" onSubmit={newFormHandler}>
        <div className="new-expense__controls">
          <button type="submit">Add New Expense</button>
        </div>
      </form>
    );
  }

  if (n === 1) {
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={reset}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }
};

export default ExpenseForm;
