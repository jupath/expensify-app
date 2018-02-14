import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../componenets/ExpensifyDashboardPage';
import AddExpensePage from '../componenets/AddExpensePage';
import EditExpensePage from '../componenets/EditExpensePage';
import HelpPage from '../componenets/HelpPage';
import NotFoundPage from '../componenets/NotFoundPage';
import Header from '../componenets/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;