// @flow
/* eslint-disable id-length */

export const errorToString = (error: any, fallback: string|null = null): string => {
  const errors = error.response.data.errors
  return Object.keys(errors).map(key => errors[key].msg).join('\n')
    || fallback
    || 'An error ocurred'
}

export const divideInt = (first: number, second: number) => first / second >> 0

export const isOdd = (num: number) => num & 1

// eslint-disable-next-line no-mixed-operators
export const randomInt = (min: number, max: number) => Math.random() * (max - min) + min

export const shuffleArray = (arr: string[]) => {
  let i = arr.length
  if (i === 0) {
    return arr
  }
  while (--i) {
    const j = Math.floor(Math.random() * (i + 1))
    const tempI = arr[i]
    const tempJ = arr[j]
    arr[i] = tempJ
    arr[j] = tempI
  }
  return arr
}

export const removeAccents = (input: string): string => {
  // eslint-disable-next-line quote-props
  const accentMap = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ñ': 'n' }
  let ret = ''
  for (let i = 0; i < input.length; i++) {
    ret += accentMap[input.charAt(i)] || input.charAt(i)
  }
  return ret
}

export const charKeys: string[] = Array.from('abcdefghijklmnopqrstuvwxyz ')

export const equalWithoutAccents = (first: string, second: string) =>
  removeAccents(first) === removeAccents(second)
