import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTypeFilterChart, setStartDateChart, setEndDateChart } from '../actions/chartFIltersActions';

export class chartFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDateChart(startDate);
    this.props.setEndDateChart(endDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }
  onTypeChange = (e) => {
    this.props.setTypeFilterChart(e.target.value);
    console.log(e.target.value)
  };
  render() {
    return (
      <div className='content-container'>
        <div className='input-group'>
          <div className='input-group__item'>
            <input
              type="text"
              placeholder='Search by type'
              className='text-input'
              value={this.props.filters.text}
              onChange={this.onTypeChange}
            />
        </div>
          <div className='input-group__item'>
          </div>
          <div className='input-group__item'>
            <DateRangePicker
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  filters: state.chartFilters
});

const mapDispatchToProps = (dispatch) => ({
  setTypeFilterChart: (type) => dispatch(setTypeFilterChart(type)),
  setStartDateChart: (startDate) => dispatch(setStartDateChart(startDate)),
  setEndDateChart: (endDate) => dispatch(setEndDateChart(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(chartFilters);