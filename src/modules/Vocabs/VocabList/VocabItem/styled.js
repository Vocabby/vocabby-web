import styled from 'styled-components'

export const VocabContainer = styled.div`
  min-height: 209px;

  border-radius: 5px;
  position: relative;
  box-shadow: 0 10px 40px 0 rgba(62, 57, 107, 0.07), 0 2px 9px 0 rgba(62, 57, 107, 0.06);
  margin-bottom: 20px;
  background-color: #fff;

  &:hover {
    transition: all .25s ease-out;
    transform: translate3d(0,-3%,0);
    cursor: pointer;
  }
`

export const VocabBody = styled.div`
  padding: 15px;
  text-align: center;
`

export const Image = styled.img`
  border-radius: 6px 6px 0 0;
  width: 100%;
  min-height: 145px;
  display: block;
  max-width: 100%;
  height: auto;
`

export const VocabTitle = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 5px;
`

export const WordCounter = styled.div`
  color: ${props => props.theme.color.textMuted};
  font-size: 85%;
`
