import React from 'react'
import PropTypes from 'prop-types'
import '@/styles/globals.scss'
import useLoadHoudini from '@/hooks/useLoadHoudini'
import Cursor from '@atoms/Cursor'
import GeneralBorder from '@molecules/GeneralBorder'
import Menu from '@/components/Molecules/Menu'

function App ({ Component, pageProps }) {
  useLoadHoudini()

  return <GeneralBorder>
    <Menu />
    <Component {...pageProps} />
    <Cursor />
  </GeneralBorder>
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default App
