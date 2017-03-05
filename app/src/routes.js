import React, { PropTypes } from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import MainLayout from 'layouts/MainLayout'
import NotFound from 'components/NotFound'

import TimeEntries from 'containers/TimeEntries'

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={TimeEntries} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
)

export default Routes