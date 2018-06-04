// @flow
import React, { Fragment } from 'react'
import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import Hero from './Hero'
import VocabList from './VocabList'
import withLayout from 'hocs/withLayout'

const Vocabs = props => (
  <Fragment>
    <Hero />
    <VocabList {...props} />
  </Fragment>
)


export default compose(
  connect(state => state.vocabs, ({ vocabs: { loadAsync } }) => ({ loadAsync })),
  withLayout,
  lifecycle({
    componentDidMount() {
      this.props.loadAsync()
    },
  }),
)(Vocabs)
