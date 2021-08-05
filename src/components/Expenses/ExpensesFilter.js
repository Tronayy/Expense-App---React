// import React, { useState } from "react";

import "./ExpensesFilter.css";
var enteredYear = "";
const ExpensesFilter = (props) => {
  // const [enteredYear, setEnteredYear] = useState("");

  const filterChangeHandler = (event) => {
    enteredYear = props.onSelectYear(event.target.value);
    // console.log(enteredYear);
  };

  // const newYear = { enteredYear };

  // props.onSelectYear(newYear);

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label className="expenses-filter-label">Filter by year</label>
        <select
          className="expenses-filter-select"
          value={enteredYear}
          onChange={filterChangeHandler}
        >
          <option value="">All Expenses</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
