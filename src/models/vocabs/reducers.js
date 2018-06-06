// @flow
import type { IVocabsState, IVocabsReducers } from './types'
import type { IVocab } from 'common/types'

type ILoadedPayload = {
  entries: IVocab[],
}

const reducers: IVocabsReducers = {
  loading(state: IVocabsState): IVocabsState {
    return {
      ...state,
      isLoading: true,
    }
  },
  loaded(state: IVocabsState, { entries }: ILoadedPayload): IVocabsState {
    return {
      ...state,
      isLoading: false,
      entries,
    }
  },
}

export default reducers
