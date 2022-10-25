import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      type: props.expense ? (props.expense.type) : 'type-none',
      calendarFocused: false,
      error: ''
    };
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onTypeChange = (e) => {
    const type = e.target.value;
    this.setState(() => ({
      type
    }))
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        type: this.state.type,
        note: this.state.note
      });
    }
  };

  render() {
    return (
        <form className='form' onSubmit={this.onSubmit}>
        {this.state.error && <p className='form__error'>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Description"
            autoFocus
            className='text-input'
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            className='text-input'
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
             {this.props.caller === 'expenses' ? (
              <select onChange={this.onTypeChange} value={this.state.type} className='select' >
                <option value="Type-none">Type-none</option>
                <option value="Repayment(Loan)">Repayment(Loan)</option>
                <option value="Grocery">Grocery</option>
                <option value="Debt">Debt</option>
                <option value="Additional costs">Additional costs</option>
                <option value="Rent">Rent</option>
              </select>
             ) : (
              <select onChange={this.onTypeChange} value={this.state.type} className='select' >
                <option value="salary(year)">salary(year)</option>
                <option value="salary(month)">salary(month)</option>
                <option value="sell(item)">sell(item)</option>
                <option value="side-job">side-job</option>
                <option value="project-paycheck">project-paycheck</option>
                <option value="pension">pension</option>
              </select>
             ) }
          <textarea
            placeholder="Add a note for your expense (optional)"
            className='textarea'
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <div>
            <button className='btn'>Save Expense</button>
          </div>
        </form>
    )
  }
}
