import React from 'react'
import PropTypes from 'prop-types'
import styles from './_.module.scss'

function Button ({ children, onClick, theme, className, ...anotherprops }) {
  const themes = {
    primary: '#7edbe9',
    secondary: 'darkgray',
    light: 'white',
    warning: '#e3a64f',
    danger: '#e34f4f'
  }
  const color = themes[theme]

  return <div className={styles['button-container']} data-testid="button">
    <button
      className={`${styles.button} text-lg p-3 px-5 ${className}`}
      onClick={onClick}
      {...anotherprops}
      style={{ '--bezel-color': color }}>
        <span>{ children || 'No hay contenido en el botón' }</span>
    </button>
    <div
      className={`${styles['button--border']} text-lg font-medium p-3 px-5`}
      style={{ '--bezel-color': color }}>{ children }
    </div>
  </div>
}

Button.defaultProps = {
  onClick: () => {},
  theme: 'primary',
  className: ''
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  theme: PropTypes.string,
  anotherprops: PropTypes.object,
  className: PropTypes.string
}

export default Button
