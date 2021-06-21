import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const ExpenseItem = (props) => {
  // function clickHandler() {}
  const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React');
  
  const removeHandler = (index) => {
    props.OnSaveExpense(index);
    setTitle('');
  };
  const clickHandler = (e) => {
    setTitle(<input type = 'text'/>);
    //setTitle(e.target.value);
  }
  return (
    <Card className='expense-item' >
      
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{props.amount}</div>

        <button className='expense-item__price' onClick = {removeHandler} >
          <RiCloseCircleLine/>

        </button>
        <button className='expense-item__price' onClick={clickHandler}>
          <TiEdit/>
          
        </button>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;
