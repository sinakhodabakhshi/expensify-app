import chaertSelector from './LineChartDataSelector';


export default (display, expenses, incomes) => {

  const expensesData = chartData(expenses);
  const incomesData = chartData(incomes)

  switch(display) {
    case 'expense':
      return {
        labels: expensesData.labels,
        datasets: [
          {
            fill: true,
            label:'expenses',
            data: expensesData.data,
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
          }
        ],
      };

      case 'incomes':
        return {
          labels: incomesData.labels,
          datasets: [
            {
              fill: true,
              label:'incomes',
              data: incomesData.data,
              borderColor: 'rgb(53, 162, 235)',
              backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
          ],
        };

      case 'combine':
        return {
          labels: incomesData.labels.length > expensesData.labels.length ? 
          incomesData.labels:
          expensesData.labels,
          datasets: [
            {
              fill: true,
              label:'expenses',
              data: expensesData.data,
              borderColor: 'rgba(255, 99, 132, 1)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
            },{
              fill: true,
              label:'incomes',
              data: incomesData.data,
              borderColor: 'rgb(53, 162, 235)',
              backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
          ],
        };

      default:
        return {
          labels: expensesData.labels,
          datasets: [
            {
              fill: true,
              label:'expenses',
              data: expensesData.data,
              borderColor: 'rgba(255, 99, 132, 1)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
            }
          ],
        };
   }
}

const chartData = (items) => {
  const labels =[];
  const data = [];
  for(let i of chaertSelector(items)) {
    labels.push(i[0].format("MMMM Do YYYY"));
    data.push(i[1]/100);
  }

  return {
    labels: labels.reverse(),
    data: data.reverse()
  }
}