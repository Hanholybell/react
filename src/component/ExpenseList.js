import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';
import { BiCommentAdd } from "react-icons/bi";

const ExpenseList = ({expenses,clearExpense,editExpense,clearItems}) =>{

    return (
        <React.Fragment>
            <ul className='list'>         
                {expenses.map(expense => {
                  return(
                    <ExpenseItem 
                      expense={expense} key={expense.id}
                      expenses = {expenses}
                      editExpense = {editExpense}
                      clearExpense={clearExpense}
                    />
                  )
                }) }

            </ul>
            {expenses.length > 0 &&(
            <button className='btn' onClick={clearItems}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <p>목록 지우기</p>
            </button>
            )}
        </React.Fragment>
    )
}

export default ExpenseList