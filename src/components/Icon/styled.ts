import styled, { css } from 'styled-components'

export const Container = styled.i`
  ${props => props.danger && css`
    color: ${props.theme.color.red};
  `}

  ${props => props.success && css`
    color: ${props.theme.color.green};
  `}
`
