const getToken = () => localStorage.getItem('accessToken')

const setToken = (token: string) => {
  localStorage.setItem('accessToken', token)
}

const removeToken = () => localStorage.removeItem('accessToken')

export default {
  getToken,
  setToken,
  removeToken,
}
