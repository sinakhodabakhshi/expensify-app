import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import DeleteModal from './DeleteModal'
import { startEditExpense , startRemoveExpense } from '../actions/expenses';
import { deletePopup , editePopup } from '../actions/popup';

export class EditExpensePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    }
  }

  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/expense');
    this.props.editePopup();
  };

  onRemove = () => {
    this.setState(() => ({
      visibility: true
    })) 
  };

  onRemoveConfirm = (confirmation) => {
    if(confirmation){
      this.setState(() => ({
        visibility: false
      }))
      this.props.startRemoveExpense({ id: this.props.expense.id }).then(()=>{
        this.props.deletePopup();
        this.props.history.push('/expense');
      })
    }else {
      this.setState(() => ({
        visibility: false
      }))
    }
  }

  render() {
    return (
      <div>
        <div className='page-header'>
          <div className='content-container'>
            <h1 className='page-header__title'>Edit Expense</h1>
          </div>
      </div>
        <div className='content-container'>
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button onClick={this.onRemove} className='btn btn-secondry'>Remove Expense</button>
        </div>
        <DeleteModal visibility={this.state.visibility} onRemoveConfirm={this.onRemoveConfirm} />
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
  deletePopup: () => dispatch(deletePopup()),
  editePopup: () => dispatch(editePopup())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
