import React from "react";
import { connect } from "react-redux";
import { Pie } from 'react-chartjs-2';
import getExpenseTotal from '../selectors/getExpenseTotal';
import chartSelectorPie from "../selectors/chartSelectorPie";


const OverAllChart = (props) => {
    return (
    <div className="content-container">
      <Pie data={chartSelectorPie(props.display ,props.expenses, props.incomes)} />
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses , 
        incomes: state.income ,
        amountOfExpenses: getExpenseTotal(state.expenses),
        amountOfIncomes: getExpenseTotal(state.income),
    }
}

export default connect(mapStateToProps)(OverAllChart);