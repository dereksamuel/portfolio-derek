/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import PropTypes from 'prop-types'
import styles from './_.module.scss'

function Button ({ children, onClick, theme }) {
  const themes = {
    primary: ['bg-primary', 'text-dark'],
    secondary: ['bg-secondary', 'text-white'],
    dark: ['bg-dark', 'text-white']
  }
  const classNameTheme = themes[theme].join(' ')

  return <button className={`${styles.button} p-3 ${classNameTheme}`} type="button" onClick={onClick}>{ children }</button>
}

Button.defaultProps = {
  onClick: () => {},
  theme: 'primary'
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  theme: PropTypes.string
}

export default Button
