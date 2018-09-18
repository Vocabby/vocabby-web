import React, { SFC, HTMLAttributes } from 'react'
import { Container } from './styled'

interface IOuterProps {
  icon: string
  size?: number
  className?: string
}

const Icon: SFC<HTMLAttributes<HTMLElement> & IOuterProps> = ({ icon, size, className, ...rest }) => (
  <Container
    className={`fa fa-${icon} ${size ? `fa-${size}x` : ''} ${className || ''}`}
    {...rest}
  />
)

export default Icon
