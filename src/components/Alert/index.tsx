import React, { SFC } from 'react'
import { Container } from './styled'

interface IOuterProps {
  children: any,
}

const Alert: SFC<IOuterProps> = ({ children }) => (
  <Container>
    <i className="fa fa-lightbulb-o m-r-sm" /> {children}
  </Container>
)

export default Alert
