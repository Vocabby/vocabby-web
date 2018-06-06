// @flow

export const errorToString = (error: any, fallback: string|null = null): string => {
  const errors = error.response.data.errors
  return Object.keys(errors).map(key => errors[key].msg).join('\n') || fallback || 'An error ocurred'
}
