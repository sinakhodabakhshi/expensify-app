import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';
import { addPopup } from '../actions/popup';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    console.log(expense)
      this.props.startAddExpense(expense).then(()=>{
      this.props.addPopup()
      this.props.history.push('/expense');
    })
  };
  render() {
    return (
      <div>
        <div className='page-header'>
          <div className='content-container'>
            <h1 className='page-header__title'>Add Expense</h1>
          </div>
        </div>
        <div className='content-container'>
          <ExpenseForm
            caller="expenses"
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense)),
  addPopup: () => dispatch(addPopup())
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
