// @flow
import type { IVocabReducers, IVocabState } from './types'

const reducers: IVocabReducers = {
  loading(state: IVocabState) {
    return {
      ...state,
      isLoading: true,
    }
  },
  loaded(state: IVocabState, { vocab }) {
    return {
      ...state,
      isLoading: false,
      vocab,
    }
  },
}

export default reducers
