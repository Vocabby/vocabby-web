// @flow
import { init } from '@rematch/core'
import vocab from 'models/vocab'
import auth from 'models/auth'
import vocabs from 'models/vocabs'

const store = init({
  models: {
    vocabs,
    vocab,
    auth,
  },
})

export default store
