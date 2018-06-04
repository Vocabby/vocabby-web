import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  min-height: 209px;
  border-radius: 5px;
  position: relative;
  box-shadow: 0 10px 40px 0 rgba(62, 57, 107, 0.07), 0 2px 9px 0 rgba(62, 57, 107, 0.06);
  margin-bottom: 20px;
  background-color: #fff;

  &:hover {
    transition: all .25s ease-out;
    transform: translate3d(0,-3%,0);
  }
`

export const Body = styled.div`
  padding: 15px;
  text-align: center;
`
