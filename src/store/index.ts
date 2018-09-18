import { init, RematchRootState, RematchDispatch } from '@rematch/core'
import vocab from './vocab'
import auth from './auth'
import vocabs from './vocabs'

const models = {
  vocabs,
  vocab,
  auth,
}

const store = init({
  models,
})

export default store

export type IStore = RematchRootState<typeof models>
export type IDispatch = RematchDispatch<typeof models>
