import getTotal from "./getExpenseTotal";

export default (items) => {
    const labels = [...new Set(items.map(item => item.type))];
    const map = new Map();
    for(let label of labels){
      const filteredItems = items.filter(item => label === item.type) ;
      map.set(label ,getTotal(filteredItems))
    }
    return map;
}