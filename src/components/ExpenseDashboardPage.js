import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummery from './ExpensesSummery';
import Popup from './Popup';

const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummery />
    <ExpenseListFilters />
    <ExpenseList />
    <Popup caller='expense' />
  </div>
);

export default ExpenseDashboardPage;
