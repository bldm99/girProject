import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { CounterProvider, MapaProvider } from './utils/Context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterProvider>
      <MapaProvider>
        <App />
      </MapaProvider>
    </CounterProvider>
  </React.StrictMode>,
)
