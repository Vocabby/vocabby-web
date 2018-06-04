// @flow
import React from 'react'
import { Tooltip } from 'react-tippy'
import { Word, Highlighted } from './styled'
import type { IProps } from './types'

const ClickableWord = ({ onClick, isAdded, title, definition, value }: IProps) => (
  <Tooltip
    theme="light"
    html={
      <span>
        <Highlighted>{title}</Highlighted> -{' '}
        {definition}
      </span>
    }
  >
    <Word onClick={onClick} added={isAdded}>
      {value}
    </Word>
  </Tooltip>
)

export default ClickableWord
