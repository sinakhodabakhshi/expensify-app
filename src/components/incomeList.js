import React from 'react';
import { connect } from 'react-redux';
import IncomeListItem from './IncomeListItem';
import selectExpenses from '../selectors/expenses';

export const IncomeList = (props) => (
  <div className='content-container'>
    <div className='list-header'>
      <div className='show-for-mobile'>Incomes</div>
      <div className='show-for-desktop'>Income</div>
      <div className='show-for-desktop'>Amount</div>
    </div>
    <div className='list-body'>
      {
        props.incomes.length === 0 ? (
          <div className='list-item list-item--message'>
            <span>No incomes</span>
          </div>
        ) : (
            props.incomes.map((income) => {
              return <IncomeListItem key={income.id} {...income} />;
            })
          )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    incomes: selectExpenses(state.income, state.filters)
  };
};

export default connect(mapStateToProps)(IncomeList);