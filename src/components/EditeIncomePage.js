import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import DeleteModal from './DeleteModal'
import { startEditIncome , startRemoveIncome } from '../actions/income';
import { deletePopup , editePopup } from '../actions/popup';

export class EditExpensePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    }
  }

  onSubmit = (income) => {
    this.props.startEditIncome(this.props.income.id, income);
    this.props.history.push('/income');
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
      this.props.startRemoveIncome({ id: this.props.income.id }).then(()=>{
        this.props.deletePopup();
        this.props.history.push('/income');
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
            <h1 className='page-header__title'>Edit Income</h1>
          </div>
      </div>
        <div className='content-container'>
          <ExpenseForm
            expense={this.props.income}
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
  income: state.income.find((inc) => inc.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditIncome: (id, income) => dispatch(startEditIncome(id, income)),
  startRemoveIncome: (data) => dispatch(startRemoveIncome(data)),
  deletePopup: () => dispatch(deletePopup()),
  editePopup: () => dispatch(editePopup())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);