// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { Row, HighlightedText } from './styled'
import type { IProps } from './types'
import SoundButton from 'components/SoundButton'

const WordRow = ({ word, onRemove }: IProps) => (
  <Row>
    <td>
      <SoundButton size="small" audioUrl={word.audioUrl} />
    </td>
    <td>
      <HighlightedText>{word.title}</HighlightedText>
    </td>
    <td>{word.definition}</td>
    <td>
      <i className="fa fa-remove" onClick={() => onRemove(word.id)} />
    </td>
  </Row>
)

export default WordRow
