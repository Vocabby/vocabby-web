// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import LogRocket from 'logrocket'
import App from './modules/App'
import env from 'common/env'

LogRocket.init(env.logrocketToken)
// $FalsePositive
ReactDOM.render(<App />, document.getElementById('root'))
