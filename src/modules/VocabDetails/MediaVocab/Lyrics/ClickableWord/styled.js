import styled from 'styled-components'

export const Word = styled.span`
  background-color: ${props => props.added ? '#fff89c' : 'transparent'};
  border-radius: ${props => props.added ? '3px' : 0};
  display: inline-block;
  line-height: 1.4;

  &:hover {
    cursor: pointer;
    border-bottom: 1px dashed;
  }
`

export const Highlighted = styled.b`
  color: ${props => props.theme.accentBlueColor};
`
