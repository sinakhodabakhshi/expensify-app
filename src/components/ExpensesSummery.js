import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getExpenseTotal from '../selectors/getExpenseTotal';
import numeral from 'numeral';

  
const ExpensesSummery = ({expensesCount , expensesTotal}) => {
    const expenseWord = expensesCount === 1 ? "expense" : "expenses";
    const totall = numeral(expensesTotal/100).format('$0,0.00');

    return(
    <div className='page-header'>
       <div className='content-container'>
         <h1 className='page-header__title'>viewing <span>{expensesCount}</span> {expenseWord} - totalling : <span>{totall}</span></h1>
         <div className='page-header__actions'>
           <Link to="/addexpense" className='btn'>Add expense</Link>
         </div>
       </div>
    </div>
    )
}
   

const mapStateToProps = (state) => {
const expenses = selectExpenses(state.expenses, state.filters)

    return {
      expensesCount: expenses.length,
      expensesTotal: getExpenseTotal(expenses)
    };
};
  
export default connect(mapStateToProps)(ExpensesSummery);


// {expensesCount !== 0 && <h3>viewing {expenseWord}: {expensesCount} - totalling : {totall}</h3>}