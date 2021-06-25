import React, { useState,useEffect,useRef } from 'react';

import './ExpenseForm.css';

// import useLocalStorage from './uselocalstorage';

const ExpenseForm = (props) => {
  

  const [Title, setTitle] = useState('');
  const [File, setFile] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // const [states, setstates] = useState(
  //   {
  //     "Title" : Title,
  //     "Date" : enteredDate
  //   }
  // )

  const [userInput, setuserInput] = useState({
    Title,enteredDate
  })

  const inputRef = useRef(null);

  useEffect (() => {
    inputRef.current.focus();
  })


  // const [userInput, setuserInput] = useState({
  //   Title: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });
  

  

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // setuserInput({
    //   ...userInput,
    //   Title: event.target.value,
    // });
    // setuserInput((prevState) => {
    //   return { ...prevState, Title: event.target.value };
    // });
  };

  const FileChangeHandler = (event) => {
    setFile(event.target.value);
    // setuserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setuserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: Title,
      amount: File,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setTitle('');
    setEnteredDate('');
    setFile('');
    // const Title = {
    //   Title:localStorage.setItem('Items',Title),
    //   Date : localStorage.setItem('Date',enteredDate)
    // }
    // setTitle(...Title,Store);
    //  setEnteredDate(...enteredDate,Store);
    // const store = localStorage.setItem("Task",JSON.stringify);

    // setstates(...states,store);


    const store = {
      ...userInput,
    Title:  localStorage.setItem("Title",Title),
    Date:  localStorage.setItem("Date",enteredDate)
      
    }
    setuserInput(store);

    //  <uselocalstorage/>
    // localStorage.removeItem("items");
   

  };
  

  
  return (
    <form onSubmit={submitHandler} >
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={Title}
            onChange={titleChangeHandler}
            ref={inputRef}
          />
        </div>
        <div className='new-expense__control'>
          <label>Image File</label>
          <input
            type='file'
            value={File}
            
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
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
      {/* {localStorage.getItem('Title') }
         {localStorage.getItem('Date') } */}
    

    </form>
  );
};

export default ExpenseForm;