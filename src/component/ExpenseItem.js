import React, { Component } from 'react'
import './ExpenseItem.css';
import { BiCommentEdit } from "react-icons/bi";
import { BiXCircle } from "react-icons/bi";

const ExpenseItem = ({expense,clearExpense,editExpense}) => {

    console.log(expense);
    return (
      <li className='item'>
        <div className='info'>
            <span className='expense'>{expense.charge}</span>
            <span className='amount'>₩ {expense.amount}</span>
        </div>
        <div>
            <button className='edit-btn2'
                onClick={()=>editExpense(expense.id)}
            ><BiCommentEdit/></button>
            <button className='clear-btn2' 
                onClick={()=>clearExpense(expense.id)
              }
              ><BiXCircle/>
                </button>
        </div>
      </li>
    )

}

export default ExpenseItem