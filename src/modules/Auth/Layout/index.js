// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper, Container, Paragraph, FacebookButton, GooglePlusButton, TextLineBreak, LogoWrapper, LogoTitle, LoginPanel } from './styled'
import type { IProps } from './types'
import env from 'common/env'
import { ROUTE } from 'common/constants'
import Icon from 'components/Icon'
import { ButtonGroup } from 'components/Generic'

const Layout = ({
  children,
  isAuthenticating,
  handleFacebookResponse,
  handleGoogleResponse,
  location,
}: IProps) => (
  <Container>
    <LoginPanel>
      <Wrapper>
        <LogoWrapper>
          <Link to={ROUTE.HOME}>
            <img src="/images/logo.png" alt="Vocabby" width="96" />
          </Link>
          <LogoTitle>Vocabby</LogoTitle>
        </LogoWrapper>
        {children}
        <TextLineBreak>or</TextLineBreak>
        <ButtonGroup>
          <FacebookButton
            socialId={env.facebookClientID}
            language="en_US"
            scope="public_profile, email"
            fields="id, name, email"
            responseHandler={handleFacebookResponse}
            xfbml
            version="v2.5"
            disabled={isAuthenticating}>
            <Icon icon="facebook" /> Facebook
          </FacebookButton>
          <GooglePlusButton
            socialId={env.googleClientID}
            scope="profile email"
            disabled={isAuthenticating}
            responseHandler={handleGoogleResponse}>
            <Icon icon="google-plus" /> Google
          </GooglePlusButton>
        </ButtonGroup>
        <Paragraph>
          {
            location === ROUTE.SIGN_IN ? (
              <span>
                Don't have account? <Link to={ROUTE.SIGN_UP}>Sign Up</Link>
              </span>
            ) : (
              <span>
                Already have account? <Link to={ROUTE.SIGN_IN}>Sign In</Link>
              </span>
            )
          }
        </Paragraph>
      </Wrapper>
    </LoginPanel>
  </Container>
)

export default Layout
