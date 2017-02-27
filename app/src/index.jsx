import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'redux'
import App from 'components/App'
import configureStore from './store'

const store = configureStore()

ReactDOM.render(
  <App store={store} />,
  document.getElementById('app')
)