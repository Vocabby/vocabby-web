// @flow
import React from 'react'
import { Container } from './styled'

type IProps = {
  +icon: string,
  +size?: number,
  +className?: string,
}

const Icon = ({ icon, size, className, ...rest }: IProps) => (
  <Container
    className={`fa fa-${icon} ${size ? `fa-${size}x` : ''} ${className || ''}`}
    {...rest}
  />
)

export default Icon
