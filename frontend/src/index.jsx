import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ApiHome from './components/swagger'
import Header from './components/Header'
import { BioFinanceiraTheme, MuiThemeProvider } from '@parmais/par-ui-material'

import store from './store'

import FactContainer from './components/FactContainer'

function App () {
  return (
    <Provider store={store}>
      <Router>
        <MuiThemeProvider theme={BioFinanceiraTheme}>
          <Header/>
          <Route exact path="/" component={FactContainer}/>
          <Route path="/docs/" component={ApiHome}/>
        </MuiThemeProvider>
      </Router>
    </Provider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)
