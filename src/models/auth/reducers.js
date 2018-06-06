// @flow
import type { ISignInFailedPayload, IAuthReducers, IAuthState } from './types'

const reducers: IAuthReducers = {
  signingIn(state: IAuthState): IAuthState {
    return {
      ...state,
      isAuthenticating: true,
      errorMessage: undefined,
    }
  },
  signInFailed(state: IAuthState, { errorMessage }: ISignInFailedPayload): IAuthState {
    return {
      ...state,
      isAuthenticating: false,
      errorMessage,
    }
  },
  signedIn(state: IAuthState): IAuthState {
    return {
      ...state,
      isAuthenticating: false,
      isAuthenticated: true,
      errorMessage: undefined,
    }
  },
  signedOut(state: IAuthState): IAuthState {
    return {
      ...state,
      isAuthenticated: false,
    }
  },
}

export default reducers
