// @flow
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Vocabs from 'modules/Vocabs'
import SignIn from 'modules/Auth/SignIn'
import SignUp from 'modules/Auth/SignUp'
import SignOut from 'modules/Auth/SignOut'
import Practice from 'modules/Practice'
import VocabDetails from 'modules/VocabDetails'
import theme from 'styles/theme'
import store from 'store'
import 'styles/globalStyles'
import { ROUTE } from 'common/constants'

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Vocabs} />
          <Route exact path={ROUTE.SIGN_IN} component={SignIn} />
          <Route exact path={ROUTE.SIGN_UP} component={SignUp} />
          <Route exact path={ROUTE.SIGN_OUT} component={SignOut} />
          <Route exact path="/vocabs/:id" component={VocabDetails} />
          <Route exact path={ROUTE.PRACTICE} component={Practice} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
)

export default App
