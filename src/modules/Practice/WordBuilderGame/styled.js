// @flow
import styled from 'styled-components'

export const LetterContainer = styled.div`
  text-align: center;
`

export const Letter = styled.div`
  display: inline-block;
  width: auto;
  min-width: 35px;
  height: 35px;
  background-color: #F6F6F6;
  border: 1px solid;
  border-color: #aaa #ccc #ccc #aaa;
  margin: 4px 2px;
  font-size: 22px;
  font-weight: 400;
  padding: 0 5px;
  line-height: 31px;
  overflow: hidden;
  text-shadow: none;
  vertical-align: middle;
  cursor: auto;
  text-decoration: none;
  border-radius: 3px;
`

export const OptionLetter = styled(Letter)`
  border-color: transparent transparent #1d77aa;
  background: #038bcf;
  cursor: pointer;
  border-width: 0 0 1px;
  color: #fff;
`

export const CurrentLetter = styled(Letter)`
  border-color: #5C9AD0 #72A8D6 #67A0D1;
  border-width: 2px;
  margin: 2px;
  padding: 0 4px;
`

export const CorrectLetter = styled(Letter)`
  border-color: transparent transparent #46bf21;
  background: #6ee439;
  color: #1a6608;
  cursor: pointer;
`
