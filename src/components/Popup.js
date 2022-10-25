import React from "react";
import { connect } from "react-redux";
import { noneText } from "../actions/popup";
import { startUndoExpense } from '../actions/expenses';
import { startUndoIncome } from '../actions/income';
import { removedExpenseCaller } from '../reducers/expenses';
import { removedIncomeCaller } from '../reducers/income';

class Popup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countDown: 4
    }
  }

  counter = () => {
    this.setState((prevState) => ({
      countDown: prevState.countDown -1
    }))
  }

  timer = () => {
    if(this.props.popupMessage){
      this.interval = setInterval(()=> this.counter(), 1000)
    }
  }

  visibility = () => {
    this.timer()
    this.clear = setInterval(() => {
      this.props.noneText()
      clearInterval(this.interval)
      this.setState(() => ({
        countDown: 4
      }))
      clearInterval(this.clear)
    } , 5000)
  }

  componentDidMount() {
    if(this.props.popupMessage){
      this.visibility();
    }
  }

  clearPopup = () => {
    clearInterval(this.clear);
    this.props.noneText();
    clearInterval(this.interval);
    this.setState(() => ({
      countDown: 4
    })); 
  }

  componentWillUnmount() {
    if(this.props.popupMessage){
      this.clearPopup();
    }
  }

  undoOnClick = () => {
    this.props.undo();
    this.clearPopup();
  }

  render() {
    return (
      <div className={this.props.popupMessage ?'popup-box' : 'popup-visibility'}>
      <p className='popup-box__title'>&#9888; {this.props.popupMessage} </p>
      <div className="popup-box__btn-box">
        {this.props.act === 'delete' && <button className="btn btn--link" onClick={this.undoOnClick}>undo </button>}
        <p>{this.state.countDown}</p>
      </div>
    </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    popupMessage: state.popupMessage.text,
    act: state.popupMessage.act
  }
}

const mapDispatchToProps = (dispatch , props) => {
  return {
    noneText: () => dispatch(noneText()),
    undo: () => props.caller === 'expense' ? dispatch(startUndoExpense(removedExpenseCaller())) : dispatch(startUndoIncome(removedIncomeCaller())) 
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(Popup)
