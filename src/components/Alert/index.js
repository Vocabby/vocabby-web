// @flow
import React from 'react'

import { Container } from './styled'

import type { IProps } from './types'

const Alert = ({ children }: IProps) => (
  <Container>
    <i className="fa fa-lightbulb-o m-r-sm" /> {children}
  </Container>
)

export default Alert
