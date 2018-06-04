// @flow
import React from 'react'
import type { IProps } from './types'

const Icon = ({ icon, size }: IProps) =>
  <i className={`fa fa-${icon} ${size ? `fa-${size}x` : ''}`} />


export default Icon
