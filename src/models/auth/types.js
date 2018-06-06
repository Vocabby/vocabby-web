// @flow
export type IAuthState = {|
  isAuthenticated: boolean,
  errorMessage?: string,
  isAuthenticating: boolean,
|}

export type IAuthEffects = {|
  facebookSignInAsync: Function,
  googleSignInAsync: Function,
  signInAsync: Function,
  signUpAsync: Function,
  signOut: Function,
|}

export type IAuthReducers = {|
  signingIn: Function,
  signInFailed: Function,
  signedIn: Function,
  signedOut: Function,
|}

export type IAuthDispatcher = IAuthReducers & IAuthEffects

export type IAuthModel = IAuthState & IAuthEffects & IAuthReducers

export type ISignInFailedPayload = {|
  errorMessage: string,
|}
