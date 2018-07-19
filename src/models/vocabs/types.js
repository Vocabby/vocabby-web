// @flow
import type { RematchDispatch } from '@rematch/core'
import type { IVocab } from 'common/types'

export type IVocabsState = {|
  +entries: IVocab[],
  +isLoading: boolean,
|}

export type IVocabsEffects = RematchDispatch => {|
  +loadAsync: Function,
|}

export type IVocabsReducers = {|
  +loading: Function,
  +loaded: Function,
|}

export type IVocabsModel = IVocabsState & IVocabsEffects & IVocabsReducers
