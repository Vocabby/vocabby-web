// @flow
import styled from 'styled-components'

export const AnswerContainer = styled.div`
  height: 25px;
  text-align: center;
  margin: 4px 2px;
  font-size: 22px;
  font-weight: 400;

  i {
    animation-duration: 0.3s;
  }
`

export const AccentedChar = styled.span`
  color: ${props => props.theme.lightBlueColor};
`
