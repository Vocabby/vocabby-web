// @flow
import styled from 'styled-components'

export const ProgressContainer = styled.div`
  height: 10px;
  margin-top: 35px;
  margin-bottom: 0;
  overflow: hidden;
  background-color: #f5f5f5;
  border-radius: 4px;
  box-shadow: inset 0 1px 2px rgba(0,0,0,.1);
`

export const ProgressValue = styled.div`
  transition: width 400ms ease-in-out;
  background-color: ${props => props.theme.color.green};

  float: left;
  height: 100%;
  font-size: 12px;
  line-height: 20px;
  box-shadow: inset 0 -1px 0 rgba(0,0,0,.15);
`
