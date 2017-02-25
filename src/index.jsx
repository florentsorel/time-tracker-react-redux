import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'redux'
import Root from './components/Root.jsx'
import configureStore from './store/configureStore'

const store = configureStore()

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app')
)