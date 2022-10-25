import React from 'react';
import { Router, Route, Switch  } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import EditeIncomePage from '../components/EditeIncomePage';
import NotFoundPage from '../components/NotFoundPage';
import LogInPage from '../components/LogInPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import SideBarNav from '../components/SideBarNav';
import AddIncomePage from '../components/AddIncomePage';
import IncomeDashboardPage from '../components/IncomeDashboardPage';
import Dashboard from '../components/Dashboard';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
    <SideBarNav />
      <Switch>
        <PublicRoute path='/' component={LogInPage} exact={true} />
        <PrivateRoute path="/dashboard" component={Dashboard}  />
        <PrivateRoute path="/expense" component={ExpenseDashboardPage}  />
        <PrivateRoute path="/income" component={IncomeDashboardPage}  />
        <PrivateRoute path="/addincome" component={AddIncomePage}  />
        <PrivateRoute path="/addexpense" component={AddExpensePage} />
        <PrivateRoute path="/editIncome/:id" component={EditeIncomePage} />
        <PrivateRoute path="/editexpense/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
