// @flow
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'
import gql from 'graphql-tag'
import clientStorage from './clientStorage'
import env from 'common/env'
import type { IUserToken, IVocab, IPracticeSet } from 'common/types'

const getClient = () => {
  const token = clientStorage.getToken()
  return new ApolloClient({
    link: new HttpLink({
      uri: env.apiURL,
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    }),
    cache: new InMemoryCache(),
  })
}

export const getVocabs = async (): Promise<IVocab[]> => {
  const query = gql`
    query GetVocabs {
      vocabs {
        title
        slug
        previewUrl
        wordCount
      }
    }
  `

  const result = await getClient().query({ query })
  return result.data.vocabs
}

export const getVocab = async (slug: string): Promise<IVocab> => {
  const result = await getClient().query({
    query: gql`
      query GetVocab($slug: String!) {
        vocab: vocabBySlug(slug: $slug) {
          title
          mediaUrl
          words {
            id: _id
            title
            definition
            audioUrl
          }
          wordCount
          content
          contentTranslated
          studyItems {
            wordId
          }
        }
      }
    `,
    variables: {
      slug,
    },
  })
  return result.data.vocab
}

export const initPractice = async (slug: string): Promise<IPracticeSet> => {
  const result = await getClient().query({
    query: gql`
      query GetVocab($slug: String!) {
        vocab: vocabBySlug(slug: $slug) {
          words {
            id: _id
            title
            definition
            audioUrl
          }
          studyItems {
            wordId
          }
        }
      }
    `,
    variables: {
      slug,
    },
  })
  return result.data.vocab
}

export const signIn = async (email: string, password: string): Promise<IUserToken> => {
  const result = await getClient().mutate({
    mutation: gql`
      mutation SignIn($email: String!, $password: String!) {
        user: signIn(email: $email, password: $password) {
          _id
          email
          token
        }
      }
    `,
    variables: {
      email,
      password,
    },
  })

  return result.data.user
}

export const signUp = async (email: string, password: string): Promise<IUserToken> => {
  const result = await getClient().mutate({
    mutation: gql`
      mutation EmailSignUp($email: String!, $password: String!) {
        user: emailSignUp(email: $email, password: $password) {
          _id
          email
          token
        }
      }
    `,
    variables: {
      email,
      password,
    },
  })

  return result.data.user
}

export const signInFacebook = async (token: string): Promise<IUserToken> => {
  const result = await getClient().mutate({
    mutation: gql`
      mutation FacebookSignUp($token: String!) {
        user: facebookSignUp(token: $token) {
          _id
          email
          token
        }
      }
    `,
    variables: {
      token,
    },
  })

  return result.data.user
}

export const signInGoogle = async (token: string): Promise<IUserToken> => {
  const result = await getClient().mutate({
    mutation: gql`
      mutation GoogleSignUp($token: String!) {
        user: googleSignUp(token: $token) {
          _id
          email
          token
        }
      }
    `,
    variables: {
      token,
    }
  })

  return result.data.user
}

// TODO: define
export const addStudyItem = async (wordId: string): Promise<any> => {

}

// TODO: define
export const removeStudyItem = async (wordId: string): Promise<any> => {

}
