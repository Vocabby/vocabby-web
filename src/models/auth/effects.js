// @flow
import type { IAuthEffects } from './types'
import clientStorage from 'common/clientStorage'
import { errorToString } from 'common/utils'
import { signIn, signInFacebook, signInGoogle, signUp } from 'common/api'
import type { ICredentials } from 'common/types'

const effects: IAuthEffects = dispatch => ({
  async signInAsync({ email, password }: ICredentials) {
    try {
      dispatch.auth.signingIn()
      const result = await signIn(email, password)
      clientStorage.setToken(result.token)
      dispatch.auth.signedIn(result)
    } catch (error) {
      dispatch.auth.signInFailed({ errorMessage: 'Invalid credentials' })
    }
  },
  async signUpAsync({ email, password }: ICredentials) {
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
})

export default effects
