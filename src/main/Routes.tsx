import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

const Networks = Loadable({
  loader: () => import('modules/Networks/NetworksContainer'),
  loading: () => <h1>Loading</h1>
});
const Dashboard = Loadable({
  loader: () => import('modules/Dashboard/DashboardModule'),
  loading: () => <h1>Loading</h1>
});
const NotFound = Loadable({
  loader: () => import('modules/NotFound/NotFoundModule'),
  loading: () => <h1>Loading</h1>
});

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Dashboard} />
      <Route path='/networks' exact component={Networks} />
      <Route path='/networks/:networkId' exact component={Networks} />
      <Route path='/404' component={NotFound} />
      <Redirect to='/404' />
    </Switch>
  );
};

export default Routes;
