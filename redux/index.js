import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

// renders root component to view
// output file => root.js

let store = createStore(todoApp)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
