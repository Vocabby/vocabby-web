import React, { SFC, ButtonHTMLAttributes } from 'react'
import { Button } from './styled'

const CloseButton: SFC<ButtonHTMLAttributes<HTMLButtonElement>> = () => (
  <Button>
    &times;
  </Button>
)

export default CloseButton
