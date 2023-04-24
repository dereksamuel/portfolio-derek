import React from 'react'
import Button from '@atoms/Button'
import styles from './_.module.scss'

function Menu () {
  return (
    <div className={styles.menu} data-testid='menu'>
      <Button theme='primary'>About me</Button>
      <Button theme='primary'>Projects</Button>
    </div>
  )
}

export default Menu
