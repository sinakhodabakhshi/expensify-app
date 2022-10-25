import { createStore, combineReducers ,applyMiddleware , compose} from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';
import popupReducer from '../reducers/popup';
import incomeReducer from '../reducers/income';
import chartFiltersReducer from '../reducers/chartFiltersReducer';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose ;

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      income: incomeReducer,
      filters: filtersReducer,
      chartFilters: chartFiltersReducer,
      auth: authReducer,
      popupMessage: popupReducer
    }),
    composeEnhancer(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
