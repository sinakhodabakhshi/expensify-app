import React from "react";
import { Line } from 'react-chartjs-2';
import { connect } from "react-redux";
import linechartDataCreator from "../selectors/chartSelectorLine";


const LineChart = (props) => {
    return (
    <div className="content-container">
      <Line  data={linechartDataCreator(props.display , props.expenses , props.incomes)} />
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses ,
        incomes: state.income 
    }
}


export default connect(mapStateToProps)(LineChart);