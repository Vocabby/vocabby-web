// @flow
import React from 'react'
import { compose, withProps } from 'recompose'
import { connect } from 'react-redux'
import Layout from './Layout'

const withLayout = (WrappedComponent: React.DOM) =>
  compose(
    connect(state => state.auth),
    withProps(() => ({
      WrappedComponent,
    })),
  )(Layout)

export default withLayout
