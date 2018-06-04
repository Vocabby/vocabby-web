import styled from 'styled-components'

export const Row = styled.div`
  line-height: 1.7;
  color: ${props => props.theme.textColor};

  i {
    visibility: hidden;
    cursor: pointer;
    color: ${props => props.theme.lightGrayColor};

    &:hover {
      color: ${props => props.theme.textColor};
    }
  }

  &:hover {
    i {
      visibility: visible;
    }
  }
`
