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
|}

export type IAuthReducer = {|
  signingIn: Function,
  signInFailed: Function,
  signedIn: Function,
  signOut: Function,
|}

export type IAuthDispatcher = IAuthReducer & IAuthEffects

export type IAuthModel = IAuthState & IAuthEffects & IAuthReducer

export type ISignInFailedPayload = {|
  errorMessage: string,
|}
