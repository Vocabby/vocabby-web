import styled from 'styled-components'

export const Row = styled.tr`
  td:first-child {
    padding-left: 8px !important;
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

export const HighlightedText = styled.b`
  color: ${props => props.theme.accentBlueColor};
`
