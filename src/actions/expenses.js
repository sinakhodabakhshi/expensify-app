import uuid from 'uuid';

import database from '../firebase/firebase';

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  //gettinh data from obj into argument by distructring
  const {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0,
    type= 'type-non'
  } = expenseData;

  const expense = {description , note , amount , createdAt , type};
  return (dispatch , getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key ,
        ...expense
      }))
    })
  }
}


//UNDO_EXPENSE
export const undoExpense = () => ({
  type: 'UNDO_EXPENSE'
})

export const startUndoExpense = (expenseData = {}) =>{
  const {
    id='',
    description = '',
    note = '',
    amount = 0,
    createdAt = 0,
    type = 'type-none'
  } = expenseData;

  return (dispatch , getState) => {
    const uid = getState().auth.uid;
    const expense = {description , note , amount , createdAt ,type};
    return database.ref(`users/${uid}/expenses/${id}`).set(expense).then(() => {
      dispatch(undoExpense())
    })
  }
}

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});


export const startRemoveExpense = ({id} = {}) =>{
  return (dispatch , getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({id}))
    })
  }
}

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id , updates) => {
  return (dispatch , getState) => {
    const uid = getState().auth.uid;
    database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
      dispatch(editExpense(id , updates))
    })
  }
}

//fetch and set data from firebase
export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses
})

export const startSetExpenses = () => {
  return (dispatch , getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
      const expenses =[];

      snapshot.forEach(expense => {
        expenses.push({
          id: expense.key,
          ...expense.val()
        });
      });
      dispatch(setExpenses(expenses))
    })
  }
}