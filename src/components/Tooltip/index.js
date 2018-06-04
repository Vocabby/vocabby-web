// @flow
import React, { Fragment } from 'react'
import { Tooltip as Tippy } from 'react-tippy'
import tooltipStyles from 'react-tippy/dist/tippy.css'

const Tooltip = (props: any) => (
  <Fragment>
    <style global jsx>
      {tooltipStyles}
    </style>
    <Tippy {...props} />
  </Fragment>
)

export default Tooltip
