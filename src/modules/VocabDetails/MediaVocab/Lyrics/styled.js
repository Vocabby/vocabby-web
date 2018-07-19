// @flow
import styled from 'styled-components'
import Icon from 'components/Icon'

export const Row = styled.div`
  line-height: 1.7;
  color: ${props => props.theme.color.text};

  i {
    visibility: hidden;
    cursor: pointer;
    color: ${props => props.theme.color.lightGray};

    &:hover {
      color: ${props => props.theme.color.text};
    }
  }

  &:hover {
    i {
      visibility: visible;
    }
  }
`

export const StyledIcon = styled(Icon)`
  margin-right: 5px;
`
