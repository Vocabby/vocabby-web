// @flow
import React from 'react'

type IProps = {
  +icon: string,
  +size?: number,
}

const Icon = ({ icon, size, ...rest }: IProps) =>
  <i className={`fa fa-${icon} ${size ? `fa-${size}x` : ''}`} {...rest} />

export default Icon
