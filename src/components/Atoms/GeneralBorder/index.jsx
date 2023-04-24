import React from 'react'
import PropTypes from 'prop-types'
import styles from './_.module.scss'

function GeneralBorder ({ children }) {
  return (
    <>
      <div className={styles['general-border']} data-testid='general-border'>
        <article className={`${styles['analytics-container']} text-sm`}>
          <span className={styles['analytics-container__item']}>const analytics = {'"Hello world"'}</span>
          <span className={styles['analytics-container__item']}>window.print({'"We are ALIVE!"'} + 1)</span>
          <span className={styles['analytics-container__item']}>console.log({'"Welcome to my portfolio!"'})</span>
          <span className={styles['analytics-container__item']}>visitors = 1</span>
        </article>
        <div className={styles['metrics-container']}>
          <div className={styles['metrics-container__item']}></div>
          <div className={styles['metrics-container__item']}></div>
          <div className={styles['metrics-container__item']}></div>
        </div>
      </div>
      { children || 'No hay contenido en el layout' }
      <div className={styles.window}></div>
    </>
  )
}

GeneralBorder.propTypes = {
  children: PropTypes.any.isRequired
}

export default GeneralBorder
