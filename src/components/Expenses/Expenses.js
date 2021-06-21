import React from 'react';

import ExpenseItem from './ExpenseItem';
//import Card from '../UI/Card';

import './Expenses.css';

const Expenses = (props) => {
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      //id: Math.random().toString()
    };
    props.removeExpense(expenseData);
  };

  return (
    <div>
      <div className='expenses'>
        
        {props.items.map((expense) => (
          <ExpenseItem
            OnSaveExpense = {saveExpenseDataHandler}
            key={expense.id}
            title={expense.title}
            amount = {expense.amount}
            date={expense.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Expenses;