import React, { PropTypes } from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import MainLayout from 'layouts/MainLayout'
import NotFound from 'components/NotFound'

import TimeEntriesContainer from 'containers/TimeEntriesContainer'

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={TimeEntriesContainer} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
)

export default Routes