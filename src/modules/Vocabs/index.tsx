import React, { SFC } from 'react'
import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import Hero from './Hero'
import VocabList from './VocabList'
import VocabPlaceholder from './VocabPlaceholder'
import { Container } from 'components/Generic'
import Layout from 'components/Layout'
import { IStore, IDispatch } from 'store'

const mapProps = (store: IStore) => {
  const { isLoading, entries } = store.vocabs
  const { isAuthenticated } = store.auth

  return {
    isLoading,
    entries,
    isAuthenticated,
  }
}

const mapDispatch = (dispatch: IDispatch) => ({
  loadAsync: dispatch.vocabs.loadAsync,
})

type ConnectProps = ReturnType<typeof mapProps> & ReturnType<typeof mapDispatch>

const Vocabs: SFC<ConnectProps> = ({ isLoading, entries, isAuthenticated }) => (
  <Layout isAuthenticated={isAuthenticated}>
    <Hero />
    {isLoading && (
      <Container>
        {Array.from({ length: 16 }, (_, key) => <VocabPlaceholder key={key} />)}
      </Container>
    )}
    {!isLoading && <VocabList entries={entries} />}
  </Layout>
)

export default compose(
  connect(mapProps, mapDispatch),
  lifecycle<ConnectProps, {}>({
    componentDidMount() {
      this.props.loadAsync()
    },
  })
)(Vocabs)
