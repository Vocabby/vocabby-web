import React from 'react'
import ReactDOM from 'react-dom'
import LogRocket from 'logrocket'
import App from './modules/App'
import env from 'common/env'

if (env.nodeEnv === 'production') {
  LogRocket.init(env.logrocketToken)
}

ReactDOM.render(<App />, document.getElementById('root'))
