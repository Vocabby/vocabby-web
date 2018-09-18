import React, { SFC } from 'react'
import { Tooltip } from 'react-tippy'
import { Word, Highlighted } from './styled'

interface IOuterProps {
  onClick: () => void
  isAdded: boolean
  title: string
  definition: string
  value: string
}

const ClickableWord: SFC<IOuterProps> = ({ onClick, isAdded, title, definition, value }) => (
  <Tooltip
    theme="light"
    html={
      <span>
        <Highlighted>{title}</Highlighted> -{' '}
        {definition}
      </span>
    }
  >
    <Word onClick={onClick} isAdded={isAdded}>
      {value}
    </Word>
  </Tooltip>
)

export default ClickableWord
