import React from "react";
import LineChart from "./LineChart";
import PieChartOverall from "./PieChartOverall";

export default class Dashboard extends React.Component {
  state = {
    chart: 'line',
    display: 'expenses',
    active: ''
  }
  chartModSelector = (e) => {
    const display = e.target.value;
    this.activeClassHandler(e)
    if(display) {
      this.setState(()=>({
        display
        })
      )
    }
  }

  chartSelector = (e) => {
    const chart = e.target.value;
    this.activeClassHandler(e)
    if(chart) {
      this.setState(()=>({
        chart
        })
      )
    }
  }
  activeClassHandler = (e) => {
    const btns = e.currentTarget.children
    for(let btn of btns){
      btn.classList.remove('btn-chart-active')
    }
    e.target.classList.add('btn-chart-active')
  }
  
  render () {
    return (
      <div className="dashboard">
        <div >
          <div className='page-header'>
            <div className='content-container'>
              <h1 className='page-header__title'>Dashboard</h1>
              <p>where you track your incomes and expenses in a more advance way.</p>
            </div>
          </div>
          <div className="chart-content">
            <div className="chart-container">
              {this.state.chart === 'line' ? (
                <LineChart display={this.state.display} />
              ):(
                <PieChartOverall display={this.state.display} />
              )}
            </div>
            <div className="btn-container content-container" onClick={this.chartSelector} >
              <button className="btn btn-chart btn-chart-selector btn-chart-active"  value="line">Line chart</button>
              <button className="btn btn-chart btn-chart-selector" value="pie">Pie chart</button>
            </div>
            <div className="btn-container content-container" onClick={this.chartModSelector} >
              <button className="btn btn-chart btn-chart-active" value="expenses">expenses</button>
              <button className="btn btn-chart" value="incomes">incomes</button>
              <button className="btn btn-chart" value="combine">combine</button>
            </div>
          </div>
        </div>
      </div>
      )
  }
}


