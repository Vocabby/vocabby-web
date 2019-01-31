import styled, { css } from 'styled-components'
import mq from 'styles/mq'

export const Container = styled.section`
  margin-right: auto;
  margin-left: auto;
  display: flex;
  width: 1120px;
  flex-wrap: wrap;

  ${mq.tablet} {
    width: 970px;
  }

  ${mq.phone} {
    width: 100%;
    display: block;
  }
`

export const Column = styled.div<{ width: number }>`
  padding-left: 15px;
  padding-right: 15px;
  flex: 0 0 ${props => props.width}%;
  width: ${props => props.width}%;
  box-sizing: border-box;

  ${mq.phone} {
    width: 100%;
    display: inline-block;
  }
`

export const Panel = styled.div`
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  order: none;
  border-radius: 5px;
  position: relative;
  box-shadow: 0 10px 40px 0 rgba(62, 57, 107, 0.07), 0 2px 9px 0 rgba(62, 57, 107, 0.06);
`

export const PanelBody = styled.div`
  padding: 20px;
`

export const PanelHeading = styled.div`
  padding: 10px 20px;
`

export const PanelFooter = styled.div`
  padding: 10px 20px;
`

export const Button = styled.button<{ primary?: boolean, block?: boolean }>`
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;

  user-select: none;
  outline: none;
  cursor: pointer;
  border: 1px solid transparent;
  padding: 12px 15px;
  font-size: 14px;
  line-height: 1.57142857;
  border-radius: 3px;
  text-decoration: none;
  transition: border .2s linear, color .2s linear, width .2s linear, background-color .2s linear;
  -webkit-font-smoothing: subpixel-antialiased;

  ${props => props.block && css`
      display: block;
      width: 100%;
    `
  }

  :disabled {
    pointer-events: none;
    cursor: not-allowed;
    box-shadow: none;
    opacity: .65;
  }

  /* default */
  background-color: #fff;
  border-color: #C9D7DF;
  color: #6e8593;

  &:hover {
    background-color: #fff;
    border-color: #A5B9C5;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), inset 0 1px 2px 0 transparent;
    color: #333;
  }

  &:active {
    color: #333;
    background-color: #d4d4d4;
    border-color: #8c8c8c;
    box-shadow: 0 1px 3px 0 transparent, inset 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  }
  /* default */

  ${
    props => props.success && css`
      background-color: #1bc11b;
      border-color: none;
      color: #fff;

      &:hover {
        background-color: #1bd61b;
        border-color: transparent;
        color: #fff;
      }

      &:active {
        box-shadow: inset 0 3px 5px rgba(0,0,0,.125);
      }
    `
  }

  ${
    props => props.primary && css`
      background-color: #038BCF;
      background-image: linear-gradient(to bottom, #038BCF, #0386cd);
      border-color: #006CA6;
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
      color: #fff;

      &:hover {
        background-color: #0275B3;
        border-color: #006295;
        color: #fff;
        box-shadow: 0 1px 3px 0 transparent, inset 0 1px 2px 0 rgba(0, 0, 0, 0.25);
      }

      &:active {
        color: #fff;
        background-color: #204d74;
        border-color: #122b40;
      }
    `
  }
`

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;

  &:focus {
    border-color: #2188ff;
    outline: none;
    box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075), 0 0 0 0.2em rgba(3, 102, 214, 0.3);
  }
`

export const Alert = styled.div`
  padding: 15px;
  margin-bottom: 20px;
`

export const DangerAlert = styled(Alert)`
  background-color: #f96868;
  border-radius: 0;
  border: none;
  border-left: 3px solid #d91d1f;
  color: white;
`

export const FormGroup = styled.div`
  margin-bottom: 15px;
`

export const ButtonGroup = styled.div`
  display: flex;
  align-items: stretch;
  align-content: stretch;

  button {
    flex-grow: 1;

    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    &:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`

export const ErrorLabel = styled.div`
  margin: 5px 0;
  font-size: 14px;
  color: ${props => props.theme.color.red};
`

export const Table = styled.table`
  width: 100%;
  max-width: 100%;

  td {
    border-top: 1px solid #e4eaec;
    padding: 8px;
    line-height: 1.42857143;
    vertical-align: top;
  }
`

export const H1 = styled.h1`
  font-size: 60px;
  margin: 25px 0;
  margin-top: 15px;
  color: #37474f;
`

export const Widget = styled.div`
  background: white;
  margin: 0 auto;
  padding: 0;
  border-radius: 6px;
  box-shadow: 0 10px 40px 0 rgba(62, 57, 107, 0.07), 0 2px 9px 0 rgba(62, 57, 107, 0.06);
  margin-bottom: 50px;
  outline: none;
`

export const WidgetBody = styled.div`
  padding: 0 25px 25px 25px;
  text-align: center;
`

export const WidgetHeader = styled.div`
  padding: 25px 25px 0 25px;
  position: relative;
`

export const WidgetFooter = styled.div`
  position: relative;
  padding: 25px;
  text-shadow: 0 1px rgba(255, 255, 255, 0.5);
  color: #666;
  min-height: 60px;
  background-color: #f6f6f6;
  border-radius: 0 0 6px 6px;
  border-top: 1px solid #e5edf5;
  text-align: center;
`
