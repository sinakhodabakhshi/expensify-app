// Expenses Reducer

const expensesReducerDefaultState = [];
let removedExpense = {};

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter((expense) => {
        if(expense.id !== action.id){
          return true
        }else{
          removedExpense = {...expense}
          return false
        }
      
      });
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        };
      });
      case 'SET_EXPENSES':
        return action.expenses;
      case 'UNDO_EXPENSE':
        return[
          ...state,
          removedExpense
        ]; 
    default:
      return state;
  }
};

export const removedExpenseCaller = () => {
  return removedExpense
}

// return state.filter(({ id }) => id !== action.id);