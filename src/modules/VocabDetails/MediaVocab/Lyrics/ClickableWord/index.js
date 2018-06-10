// @flow
import React from 'react'
import { Tooltip } from 'react-tippy'
import { Word, Highlighted } from './styled'

type IProps = {
  onClick: Function,
  isAdded: boolean,
  title: string,
  definition: string,
  value: string,
}

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
