import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getExpenseTotal from '../selectors/getExpenseTotal';
import numeral from 'numeral';

  
const IncomeSummery = ({incomesCount , incomesTotal}) => {
    const expenseWord = incomesCount === 1 ? "expense" : "expenses";
    const totall = numeral(incomesTotal/100).format('$0,0.00');

    return(
    <div className='page-header'>
       <div className='content-container'>
         <h1 className='page-header__title'>viewing <span>{incomesCount}</span> {expenseWord} - totalling : <span>{totall}</span></h1>
         <div className='page-header__actions'>
           <Link to="/addincome" className='btn'>Add Income</Link>
         </div>
       </div>
    </div>
    )
}
   

const mapStateToProps = (state) => {
const income = selectExpenses(state.income , state.filters)

    return {
      incomesCount: income.length,
      incomesTotal: getExpenseTotal(income)
    };
};
  
export default connect(mapStateToProps)(IncomeSummery);