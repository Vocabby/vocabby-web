import styled from 'styled-components'

export const ButtonContainer = styled.div`
  padding: ${props => props.size === 'small' ? '0' : '10px 0'};
  color: ${props => props.theme.color.text};
  display: ${props => props.isVisible ? 'inherit' : 'none'};

  i {
    font-size: ${props => props.size === 'small' ? '1.5em' : '3em'};
  }

  &:hover {
    cursor: pointer;
  }
`
