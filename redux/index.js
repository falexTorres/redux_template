// entry point for app
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'

// renders root component to view
// output file => root.js
render(
  <Root />,
  document.getElementById('root')
)
