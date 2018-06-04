// @flow
import type { IVocab } from 'common/types'

export type IProps = {|
  +vocab: IVocab,
  +isAuthenticated: boolean,
  +removeStudyItem: Function,
|}
