// @flow
import type { IVocabsState } from './types'

const reducers = {
  loading(state: IVocabsState): IVocabsState {
    return {
      ...state,
      isLoading: true,
    }
  },
  loaded(state: IVocabsState, { entries }): IVocabsState {
    return {
      ...state,
      isLoading: false,
      entries,
    }
  },
}

export default reducers
