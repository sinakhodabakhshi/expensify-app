import moment from "moment";
import getTotal from "./getExpenseTotal";

export default (items) => {
  const amountHolder = new Map();
  const monthsHolder = [];
  const currentDate = moment();
  const maxMonth = moment(Math.min(...items.map(item => item.createdAt)));
  while(currentDate.isSameOrAfter(maxMonth)){
        if(currentDate.date() != 1){
          const itemsInCurrentMonth =  items.filter(item => {
            const createdAtMoment = moment(item.createdAt)
            const startDateMatch = currentDate.isSameOrAfter(createdAtMoment);
            const currentDateClone = currentDate.clone().subtract((currentDate.date()-1) , 'day')
            const endDateMatch = currentDateClone.isSameOrBefore(createdAtMoment);
            return startDateMatch && endDateMatch
          })
          amountHolder.set(currentDate.clone().subtract((currentDate.date()-1) , 'day') , getTotal(itemsInCurrentMonth))
          currentDate.subtract((currentDate.date()-1) , 'day');
        }else {
          monthsHolder.push('sina')
          const itemsInCurrentMonth =  items.filter(item => {
            const createdAtMoment = moment(item.createdAt)
            const startDateMatch = currentDate.clone().subtract(1,'day').isSameOrAfter(createdAtMoment);
            const currentDateClone = currentDate.clone().subtract(1 , 'month');
            const endDateMatch = currentDateClone.isSameOrBefore(createdAtMoment);
            return startDateMatch && endDateMatch
          })
    
          amountHolder.set(currentDate.clone().subtract(1,'day') , getTotal(itemsInCurrentMonth))
          currentDate.subtract(1 , 'month');
        }
      }
    
      return amountHolder;
    
}

