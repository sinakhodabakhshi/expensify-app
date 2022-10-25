import uuid from 'uuid';

import database from '../firebase/firebase';

// ADD_EXPENSE
export const addIncome = (income) => ({
  type: 'ADD_INCOME',
  income
});

export const startAddIncome = (incomeData = {}) => {
  //gettinh data from obj into argument by distructring
  const {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0,
    type = 'type-none'
  } = incomeData;

  const income = {description , note , amount , createdAt ,type};
  return (dispatch , getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/income`).push(income).then((ref) => {
      dispatch(addIncome({
        id: ref.key ,
        ...income
      }))
    })
  }
}


//UNDO_EXPENSE
export const undoIncome = () => ({
  type: 'UNDO_INCOME'
})

export const startUndoIncome = (incomeData = {}) =>{
  const {
    id='',
    description = '',
    note = '',
    amount = 0,
    createdAt = 0,
    type = 'type-none'
  } = incomeData;

  return (dispatch , getState) => {
    const uid = getState().auth.uid;
    const income = {description , note , amount , createdAt ,type};
    return database.ref(`users/${uid}/income/${id}`).set(income).then(() => {
      dispatch(undoIncome())
    })
  }
}

// REMOVE_EXPENSE
export const removeIncome = ({ id } = {}) => ({
  type: 'REMOVE_INCOME',
  id
});


export const startRemoveIncome = ({id} = {}) =>{
  return (dispatch , getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/income/${id}`).remove().then(() => {
      dispatch(removeIncome({id}))
    })
  }
}

// EDIT_EXPENSE
export const editIncome = (id, updates) => ({
  type: 'EDIT_INCOME',
  id,
  updates
});

export const startEditIncome = (id , updates) => {
  return (dispatch , getState) => {
    const uid = getState().auth.uid;
    database.ref(`users/${uid}/income/${id}`).update(updates).then(() => {
      dispatch(editIncome(id , updates))
    })
  }
}

//fetch and set data from firebase
export const setIncome = (incomes) => ({
  type: "SET_INCOME",
  incomes
})

export const startSetIncome = () => {
  return (dispatch , getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/income`).once('value').then((snapshot) => {
      const incomes =[];

      snapshot.forEach(income => {
        incomes.push({
          id: income.key,
          ...income.val()
        });
      });
      dispatch(setIncome(incomes))
    })
  }
}