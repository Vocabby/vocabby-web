import React, { SFC } from 'react'
import { compose, lifecycle } from 'recompose'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'
import Layout from 'components/Layout'
import MediaVocab from './MediaVocab'
import ListVocab from './ListVocab'
import { IVocab } from 'common/types'
import { IStore, IDispatch } from 'store'

interface IProps {
  isLoading: boolean
  vocab: IVocab
}

const mapProps = (store: IStore) => {
  const { vocab, isLoading } = store.vocab
  const { isAuthenticated } = store.auth

  return {
    vocab,
    isLoading,
    isAuthenticated,
  }
}

const mapDispatch = (dispatch: IDispatch) => ({
  loadAsync: dispatch.vocab.loadAsync,
})

type ConnectedProps = ReturnType<typeof mapProps> & ReturnType<typeof mapDispatch>

const VocabDetails: SFC<ConnectedProps> = ({ isLoading, vocab, isAuthenticated }) => (
  <Layout isAuthenticated={isAuthenticated}>
    {isLoading && <div>Loading</div>}
    {
      !isLoading
        && vocab.group === 'Essentials'
        && <ListVocab />
    }
    {
      !isLoading
        && vocab.group !== 'Essentials'
        && <MediaVocab vocab={vocab} isAuthenticated={isAuthenticated} />
    }
  </Layout>
)

const enhance = compose(
  connect(mapProps, mapDispatch),
  lifecycle<ConnectedProps & RouteComponentProps<{ id: string }>, {}>({
    componentDidMount() {
      this.props.loadAsync(this.props.match.params.id)
    },
  }),
  withRouter
)

export default enhance(VocabDetails)
