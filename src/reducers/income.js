const expensesReducerDefaultState = [];
let removedIncome = {};

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_INCOME':
      return [
        ...state,
        action.income
      ];
    case 'REMOVE_INCOME':
      return state.filter((income) => {
        if(income.id !== action.id){
          return true
        }else{
          removedIncome = {...income}
          return false
        }
      
      });
    case 'EDIT_INCOME':
      return state.map((income) => {
        if (income.id === action.id) {
          return {
            ...income,
            ...action.updates
          };
        } else {
          return income;
        };
      });
      case 'SET_INCOME':
        return action.incomes;
      case 'UNDO_INCOME':
        return[
          ...state,
          removedIncome
        ]; 
    default:
      return state;
  }
};

export const removedIncomeCaller = () => {
  return removedIncome
}