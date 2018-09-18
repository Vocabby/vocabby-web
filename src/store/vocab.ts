import { createModel } from '@rematch/core'
import { getVocab } from 'common/api'
import { IVocab } from 'common/types'

const vocab = createModel({
  state: {
    vocab: undefined as IVocab,
    isLoading: true,
  },
  reducers: {
    loading(state) {
      return {
        ...state,
        isLoading: true,
      }
    },
    loaded(state, { vocab }) {
      return {
        ...state,
        isLoading: false,
        vocab,
      }
    },
  },
  effects: dispatch => ({
    async loadAsync(slug: string) {
      dispatch.vocab.loading()
      const vocab = await getVocab(slug)
      dispatch.vocab.loaded({ vocab })
    },
  }),
})

export default vocab
