
import moment from 'moment';

// Filters Reducer

const filtersReducerDefaultState = {
  category: '',
  sortBy: 'date',
  startDate: moment().startOf('year'),
  endDate: moment().endOf('year')
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TYPE_FILTER':
      return {
        ...state,
        category: action.category
      };
    case 'SORT_BY_AMOUNT_CHART':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY_DATE_CHART':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE_CHAERT':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE_CHART':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};