// @flow
import jwtDecode from 'jwt-decode'

export const isTokenValid = (token: string) => {
  try {
    const decodedToken = jwtDecode(token)
    const expiryDate = new Date(decodedToken.exp * 1000)
    return expiryDate > new Date()
  } catch (err) {
    return false
  }
}
