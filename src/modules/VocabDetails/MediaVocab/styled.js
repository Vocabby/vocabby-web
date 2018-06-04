import styled from 'styled-components'


export const ContentHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 15px 15px 0;

  h2 {
    margin-left: 10px;
    margin-bottom: 15px;
  }
`

export const DoorStop = styled.div`
  margin-top: 30px;
`

export const MutedText = styled.small`
  color: ${props => props.theme.textMutedColor};
`
