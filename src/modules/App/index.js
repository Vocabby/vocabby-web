// @flow
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Vocabs from 'modules/Vocabs'
import SignIn from 'modules/Auth/SignIn'
import SignUp from 'modules/Auth/SignUp'
import SignOut from 'modules/Auth/SignOut'
import VocabDetails from 'modules/VocabDetails'
import theme from 'styles/theme'
import store from 'store'
import 'styles/globalStyles'

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Vocabs} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signout" component={SignOut} />
          <Route exact path="/vocabs/:id" component={VocabDetails} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
)

export default App
