import styled from 'styled-components'

export const Row = styled.tr`
  td:first-child {
    padding-left: 8px;
  }

  i {
    visibility: hidden;
    color: ${props => props.theme.textColor};

    &:hover {
      cursor: pointer;
    }
  }

  &:hover {
    i {
      visibility: visible;
    }
  }
`

export const HighlightedText = styled.span`
  color: ${props => props.theme.color.accentBlue};
  font-weight: bold;
`
