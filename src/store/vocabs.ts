import { createModel } from '@rematch/core'
import { getVocabs } from 'common/api'

const vocabs = createModel({
  state: {
    entries: [],
    isLoading: true,
  },
  reducers: {
    loading(state) {
      return {
        ...state,
        isLoading: true,
      }
    },
    loaded(state, { entries }) {
      return {
        ...state,
        isLoading: false,
        entries,
      }
    },
  },
  effects: dispatch => ({
    async loadAsync() {
      dispatch.vocabs.loading()
      const entries = await getVocabs()
      dispatch.vocabs.loaded({ entries })
    },
  }),
})

export default vocabs
