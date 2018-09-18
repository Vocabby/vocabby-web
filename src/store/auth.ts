import { createModel } from '@rematch/core'
import clientStorage from 'common/clientStorage'
import { errorToString } from 'common/utils'
import { signIn, signInFacebook, signInGoogle, signUp } from 'common/api'

const auth = createModel({
  state: {
    isAuthenticated: Boolean(clientStorage.getToken()),
    errorMessage: undefined,
    isAuthenticating: false,
  },
  reducers: {
    signingIn(state) {
      return {
        ...state,
        isAuthenticating: true,
        errorMessage: undefined,
      }
    },
    signInFailed(state, { errorMessage }) {
      return {
        ...state,
        isAuthenticating: false,
        errorMessage,
      }
    },
    signedIn(state) {
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: true,
        errorMessage: undefined,
      }
    },
    signedOut(state) {
      return {
        ...state,
        isAuthenticated: false,
      }
    },
  },
  effects: dispatch => ({
    async signInAsync({ email, password }) {
      try {
        dispatch.auth.signingIn()
        const result = await signIn(email, password)
        clientStorage.setToken(result.token)
        dispatch.auth.signedIn(result)
      } catch (error) {
        dispatch.auth.signInFailed({ errorMessage: 'Invalid credentials' })
      }
    },
    async signUpAsync({ email, password }) {
      try {
        dispatch.auth.signingIn()
        const result = await signUp(email, password)
        clientStorage.setToken(result.token)
        dispatch.auth.signedIn(result)
      } catch (error) {
        dispatch.auth.signInFailed({ errorMessage: errorToString(error) })
      }
    },
    async facebookSignInAsync(accessToken: string) {
      try {
        dispatch.auth.signingIn()
        const result = await signInFacebook(accessToken)
        clientStorage.setToken(result.token)
        dispatch.auth.signedIn(result)
      } catch (error) {
        dispatch.auth.signInFailed({ errorMessage: 'Something went wrong' })
      }
    },
    async googleSignInAsync(accessToken: string) {
      try {
        dispatch.auth.signingIn()
        const result = await signInGoogle(accessToken)
        clientStorage.setToken(result.token)
        dispatch.auth.signedIn(result)
      } catch (error) {
        dispatch.auth.signInFailed({ errorMessage: 'Something went wrong' })
      }
    },
    signOut() {
      clientStorage.removeToken()
      dispatch.auth.signedOut()
    },
  }),
})

export default auth
