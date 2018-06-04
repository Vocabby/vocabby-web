// @flow
import React from 'react'
import YouTube from 'react-youtube'
import { VideoContainer } from './styled'

type IProps = {|
  +mediaUrl: string,
|}

const Preview = ({ mediaUrl }: IProps) => (
  <VideoContainer>
    <YouTube videoId={mediaUrl.split('=')[1]} opts={{ width: '100%' }} />
  </VideoContainer>
)

export default Preview
