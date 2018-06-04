// @flow

const breakpoints = {
  phone: 380,
  tablet: 768,
  desktop: 1200,
}

export const mediaQueries = Object.keys(breakpoints).reduce((obj, size) => {
  obj[size] = `@media (max-width: ${breakpoints[size] / 16}em)`
  return obj
}, {})

export default mediaQueries
