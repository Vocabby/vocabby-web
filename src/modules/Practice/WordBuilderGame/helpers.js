// @flow
import { isOdd, divideInt, shuffleArray } from 'common/utils'

const getSlotsCount = (charCount: number) => {
  const slots = [3, 5, 8, 10, 13, 15, 18, 20, 23, 25]
  let prev = 0
  for (let i = 0; i < slots.length; i++) {
    if (prev < charCount && charCount <= slots[i]) {
      return slots[i]
    }
    prev = slots[i]
  }
  return charCount
}

const getDecoyCharacters = (charCount: number, visibleCharCount: number) => {
  const vowels = Array.from('aeiouy')
  const consonants = Array.from('bcdfghjklmnpqrstvwxz')
  const decoyCount = getSlotsCount(charCount) - charCount + visibleCharCount

  const consonantDecoyCount = divideInt(decoyCount, 2)
  const vowelDecoyCount = isOdd(decoyCount) ? consonantDecoyCount + 1 : consonantDecoyCount

  shuffleArray(vowels)
  shuffleArray(consonants)

  const decoyVowels = vowels.slice(0, vowelDecoyCount)
  const decoyConsonants = consonants.slice(0, consonantDecoyCount)
  return decoyVowels.concat(decoyConsonants)
}

export const generateWordBuilderGame = (word: string) => {
  const wordChars = word.split('')
  let visibleCharCount = 3
  if (wordChars.length < 8) {
    if (wordChars.length > 3) {
      visibleCharCount = 2
    } else {
      visibleCharCount = 1
    }
  }
  const visibleOptions: string[] = wordChars.slice(0, visibleCharCount)
  const invisibleOptions: string[] = wordChars.slice(visibleCharCount)
  const decoyChars = getDecoyCharacters(wordChars.length, visibleCharCount)
  const options: string[] = invisibleOptions.concat(decoyChars)

  shuffleArray(options)

  return {
    options,
    visibleOptions,
    visibleCharCount,
  }
}
