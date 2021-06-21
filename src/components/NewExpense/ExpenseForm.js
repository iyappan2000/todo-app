import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  // const initialTitle = window.localStorage.getItem("Title");
  // const initialFile = window.localStorage.getItem("File");
  // const initialDate = window.localStorage.getItem("Date");

  // const [Title, setTitle] = useState('',initialTitle);
  // const [File, setFile] = useState('',initialFile);
  // const [enteredDate, setEnteredDate] = useState('',initialDate);
  const [userInput, setUserInput] = useState({
    Title: '',
    enteredAmount: '',
    enteredDate: '',
  });
  // const Title = ''

  localStorage.setItem("Items",JSON.stringify(userInput));

  (JSON.parse(localStorage.getItem("Items")));

  // useEffect(() => {
  //   window.localStorage.setItem("Title",Title);
  //   window.localStorage.setItem("Title",File);
  //   window.localStorage.setItem("Title",enteredDate);

  // });

  const titleChangeHandler = (event) => {
    // setTitle(event.target.value);
    setUserInput({
      ...userInput,
      Title: event.target.value,
    });
    setUserInput((prevState) => {
      return { ...prevState, Title: event.target.value };
    });
  };

  const FileChangeHandler = (event) => {
    // setFile(event.target.value);
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: userInput.Title,
      amount: userInput.File,
      date: new Date(userInput.enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setUserInput('')
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={userInput.Title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Image File</label>
          <input
            type='file'
            min='0.01'
            step='0.01'
            value={userInput.File}
            
            onChange={FileChangeHandler}
          />
          {/* //<img src={enteredAmount} alt ="file"/> */}
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;