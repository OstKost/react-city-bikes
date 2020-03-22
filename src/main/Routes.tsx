import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import PageLoader from 'library/common/commonComponents/PageLoader/PageLoader';

const Networks = Loadable({
  loader: () => import('modules/Networks/NetworksContainer'),
  loading: PageLoader
});
const Dashboard = Loadable({
  loader: () => import('modules/Dashboard/DashboardModule'),
  loading: PageLoader
});
const NotFound = Loadable({
  loader: () => import('modules/NotFound/NotFoundModule'),
  loading: PageLoader
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
