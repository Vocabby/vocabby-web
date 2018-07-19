// @flow
import React from 'react'
import { Row, HighlightedText } from './styled'
import type { IWord } from 'common/types'
import SoundButton from 'components/SoundButton'
import Icon from 'components/Icon'

type IProps = {
  word: IWord,
  onRemove: Function,
}

const WordRow = ({ word, onRemove }: IProps) => (
  <Row>
    <td>
      <SoundButton size="small" audioUrl={word.audioUrl} isVisible />
    </td>
    <td>
      <HighlightedText>{word.title}</HighlightedText>
    </td>
    <td>{word.definition}</td>
    <td>
      <Icon icon="remove" onClick={() => onRemove(word.id)} />
    </td>
  </Row>
)

export default WordRow
