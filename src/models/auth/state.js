// @flow
import type { IAuthState } from './types'
import clientStorage from 'common/clientStorage'

const initialState: IAuthState = {
  isAuthenticated: Boolean(clientStorage.getToken()),
  errorMessage: undefined,
  isAuthenticating: false,
}

export default initialState
