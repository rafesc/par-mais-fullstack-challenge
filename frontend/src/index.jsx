import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ApiHome from './components/swagger'
import ChuckList from './components/chuckList'
import Header from './components/Header'
import { BioFinanceiraTheme, MuiThemeProvider } from '@parmais/par-ui-material'

function App () {
  return (
    <Router>
      <MuiThemeProvider theme={BioFinanceiraTheme}>
        <Header/>
        <Route exact path="/" component={ChuckList}/>
        <Route path="/docs/" component={ApiHome}/>
      </MuiThemeProvider>
    </Router>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)
