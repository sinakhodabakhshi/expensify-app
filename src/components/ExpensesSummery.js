import React from 'react';
import selectExpenses from '../selectors/expenses';
import getExpenseTotal from '../selectors/getExpenseTotal';
import { connect } from 'react-redux';
import numeral from 'numeral';
  
const ExpensesSummery = ({expensesCount , expensesTotal}) => {
    const expenseWord = expensesCount === 1 ? "expense" : "expenses";
    const totall = numeral(expensesTotal/100).format('$0.00.00');

    return(
    <div>
      {expensesCount !== 0 && <h3>viewing {expenseWord}: {expensesCount} - totalling : {totall}</h3>}
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