import React from "react";
import { connect } from "react-redux";
import { Route , Redirect } from "react-router-dom";
import Header from '../components/Header';
import SideBarNav from '../components/SideBarNav';

export const PrivateRoute = ({ isAuthenticated , component: Component , ...rest}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                <Header />
                <SideBarNav />
                <Component {...props} />
            </div>
        ) : (
            <Redirect to="/" />
        )
    )} />
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)