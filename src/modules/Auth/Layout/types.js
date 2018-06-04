// @flow
import React from 'react'

export type IProps = {|
  +children: React.DOM,
  +isAuthenticating: boolean,
  +handleFacebookResponse: Function,
  +handleGoogleResponse: Function,
  +location: string,
|}
