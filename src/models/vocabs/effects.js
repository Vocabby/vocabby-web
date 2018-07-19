// @flow
import type { IVocabsEffects } from './types'
import { getVocabs } from 'common/api'

const effects: IVocabsEffects = dispatch => ({
  async loadAsync() {
    dispatch.vocabs.loading()
    const entries = await getVocabs()
    dispatch.vocabs.loaded({ entries })
  },
})

export default effects
