import React, { SFC } from 'react'
import { Row, HighlightedText } from './styled'
import { IWord } from 'common/types'
import SoundButton from 'components/SoundButton'
import Icon from 'components/Icon'

interface IOuterProps {
  word: IWord
  onRemove: (id: string) => void
}

const WordRow: SFC<IOuterProps> = ({ word, onRemove }) => (
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
