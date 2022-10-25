import pieChartSelectorPie from "./pieChartDataSelector";
import getTotal from "./getExpenseTotal";

export default (display = 'expenses' ,expenses = [] ,incomes = []) => {
  const expensesData = chartData(expenses);
  const incomesData = chartData(incomes);

  switch (display) {
    case 'expenses':
      return {
        labels: expensesData.labels,
        datasets: [
          {
            label: 'amount',
            data: expensesData.data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

      case 'incomes': 
        return {
          labels: incomesData.labels,
          datasets: [
            {
              label: 'amount',
              data: incomesData.data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        };

      case 'combine':
        return {
          labels: ['expenses', 'incomes'],
          datasets: [
            {
              label: '# of Votes',
              data: [getTotal(expenses)/100, getTotal(incomes)/100],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
              ],
              borderWidth: 1,
            },
          ],
        };

    default:
        break;
  }
}

const chartData = (items) => {
  const labels =[];
  const data = [];
  for(let i of pieChartSelectorPie(items)) {
    labels.push(i[0]);
    data.push(i[1]/100);
  }

  return {
    labels,
    data
  }
}