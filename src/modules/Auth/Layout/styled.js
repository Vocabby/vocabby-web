// @flow
import styled from 'styled-components'
import { FacebookLogin } from 'react-facebook-login-component'
import { GoogleLogin } from 'react-google-login-component'
import { Button, Panel } from 'components/Generic'
import mq from 'styles/mq'

const DarkBlueButton = Button.extend`
  color: white;
  background-color: #3b5998;
  border: 0;

  &:hover, &:active, &:focus {
    color: #fff;
    background-color: #4c70ba;
  }
`

const DarkRedButton = Button.extend`
  color: #fff;
  background-color: #dd4b39;
  border: 0;

  &:hover, &:active, &:focus {
    color: #fff;
    background-color: #e47365;
  }
`

export const LogoWrapper = styled.div`
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`

export const LogoTitle = styled.h2`
  margin: 30px 0;
`

export const Container = styled.div`
  width: 420px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
`

export const LoginPanel = styled(Panel)`
  ${mq.phone} {
    margin-bottom: 0;
    box-shadow: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
  }
`

export const Wrapper = styled.section`
  padding: 40px;
  ${mq.phone} {
    flex: 1;
  }
`

export const Paragraph = styled.p`
  text-align: center;
  margin-top: 35px;
  margin-bottom: 0;
`

export const TextLineBreak = styled.p`
  display: table;
  width: 100%;
  white-space: nowrap;
  text-align: center;
  line-height: 1.5;
  padding: 10px 3px;
  &:before, &:after {
    border-top: 1px solid ${props => props.theme.color.lightGray};
    content: '';
    display: table-cell;
    position: relative;
    top: 12px;
    width: 45%;
  }
  &:before { right: 1.5%; }
  &:after { left: 1.5%; }
`

export const FacebookButton = DarkBlueButton.withComponent(FacebookLogin)

export const GooglePlusButton = DarkRedButton.withComponent(GoogleLogin)
