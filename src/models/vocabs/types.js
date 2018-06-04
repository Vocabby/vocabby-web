// @flow
import type { IVocab } from 'common/types'

export type IVocabsState = {|
  +entries: IVocab[],
  +isLoading: boolean,
|}
