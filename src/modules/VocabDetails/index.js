// @flow
import React, { Fragment } from 'react'
import { compose, lifecycle } from 'recompose'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import MediaVocab from './MediaVocab'
import ListVocab from './ListVocab'
import type { IProps } from './types'
import withLayout from 'hocs/withLayout'

const VocabDetails = ({ isLoading, ...rest }: IProps) => (
  <Fragment>
    {isLoading && <div>Loading</div>}
    {
      !isLoading
        && rest.vocab.group === 'Essentials'
        && <ListVocab />
    }
    {
      !isLoading
        && rest.vocab.group !== 'Essentials'
        && <MediaVocab {...rest} />
    }
  </Fragment>
)

const enhance = compose(
  connect(state => state.vocab, ({ vocab: { loadAsync } }) => ({ loadAsync })),
  lifecycle({
    componentDidMount() {
      this.props.loadAsync(this.props.match.params.id)
    },
  }),
  withRouter,
  withLayout,
)

export default enhance(VocabDetails)
