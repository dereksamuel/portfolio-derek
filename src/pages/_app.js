import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '@/styles/globals.scss'

function App ({ Component, pageProps }) {
  const [customProp, setCustomProp] = useState([])

  if ('paintWorklet' in CSS) {
    if (customProp.find((cp) => cp !== '--bezel-color')) {
      window.CSS.registerProperty({
        name: '--bezel-color',
        syntax: '<color>',
        inherits: false,
        initialValue: 'false'
      })
      setCustomProp([...customProp, '--bezel-color'])
    }
    CSS.paintWorklet.addModule('js/bezel.js')
  }

  return <Component {...pageProps} />
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default App
