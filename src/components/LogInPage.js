import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const LoginPage = ({startLogin}) => (
    <div>
      <h3>please log in</h3>
      <button onClick={startLogin}>Log In</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined , mapDispatchToProps)(LoginPage)