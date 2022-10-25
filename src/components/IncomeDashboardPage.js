import React from 'react';
import IncomeList from './incomeList';
import ExpenseListFilters from './ExpenseListFilters';
import IncomeSummery from './IncomeSummery';
import Popup from './Popup';

const IncomeDashboardPage = () => (
    <div>
      <IncomeSummery />
      <ExpenseListFilters />
      <IncomeList />
      <Popup caller='income' />
    </div>
  );
  
  export default IncomeDashboardPage;
