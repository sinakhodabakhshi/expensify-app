import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddIncome } from '../actions/income';
import { addPopup } from '../actions/popup';

export class AddIncomePage extends React.Component {
  onSubmit = (income) => {
      this.props.startAddIncome(income).then(()=>{
      this.props.addPopup();
      this.props.history.push('/income');
    })
  };
  render() {
    return (
      <div>
        <div className='page-header'>
          <div className='content-container'>
            <h1 className='page-header__title'>Add Income</h1>
          </div>
        </div>
        <div className='content-container'>
          <ExpenseForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddIncome: (income) => dispatch(startAddIncome(income)),
  addPopup: () => dispatch(addPopup())
});

export default connect(undefined, mapDispatchToProps)(AddIncomePage);