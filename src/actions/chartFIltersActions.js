export const setTypeFilterChart = (category = '') => ({
    type: 'SET_TYPE_FILTER',
    category
  });
  
  // SORT_BY_DATE
  export const sortByDateChart = () => ({
    type: 'SORT_BY_DATE_CHART'
  });
  
  // SORT_BY_AMOUNT
  export const sortByAmountChart = () => ({
    type: 'SORT_BY_AMOUNT_CHART'
  });
  
  // SET_START_DATE
  export const setStartDateChart = (startDate) => ({
    type: 'SET_START_DATE_CHAERT',
    startDate
  });
  
  // SET_END_DATE
  export const setEndDateChart = (endDate) => ({
    type: 'SET_END_DATE_CHART',
    endDate
  });