import React, { SFC } from 'react'
import { ProgressContainer, ProgressValue } from './styled'

interface IOuterProps {
  percent: number
}

const ProgressBar: SFC<IOuterProps> = ({ percent }) => (
  <ProgressContainer>
    <ProgressValue style={{
      width: `${percent}%`,
    }} />
  </ProgressContainer>
)

export default ProgressBar
