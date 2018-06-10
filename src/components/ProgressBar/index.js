// @flow
import React from 'react'
import { ProgressContainer, ProgressValue } from './styled'

type IProps = {|
  +percent: number,
|}

const ProgressBar = ({ percent }: IProps) => (
  <ProgressContainer>
    <ProgressValue style={{
      width: `${percent}%`,
    }} />
  </ProgressContainer>
)

export default ProgressBar
