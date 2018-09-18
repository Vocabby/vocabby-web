import styled from 'styled-components'
import theme from 'styles/theme'

export const Word = styled.span<{ isAdded: boolean }>`
  background-color: ${props => props.isAdded ? '#fff89c' : 'transparent'};
  border-radius: ${props => props.isAdded ? '3px' : 0};
  display: inline-block;
  line-height: 1.4;

  &:hover {
    cursor: pointer;
    border-bottom: 1px dashed;
  }
`

export const Highlighted = styled.b`
  color: ${theme.color.accentBlue};
`
