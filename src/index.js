import ReactDOM from 'react-dom'
import React from 'react'
import './styles.css'
import App from './App'

import { Logo } from '@pmndrs/branding'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <a to="styles.css" target="_blank" download>
        Download
      </a>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>bad —</div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>07/02/2022</div>
    </div>
  )
}

ReactDOM.render(
  <>
    <App />
    <Overlay />
    <Logo style={{ position: 'absolute', bottom: 40, left: 40, width: 30 }} />
  </>,
  document.getElementById('root')
)
