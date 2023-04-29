import React from 'react'
import Button from '@atoms/Button'
import styles from './_.module.scss'
import Link from 'next/link'

function Menu () {
  return (
    <div className={`${styles.menu} pt-5 pb-3 pr-5`} data-testid='menu'>
      <Button theme='primary' isActive={true}><Link href="/">About me</Link></Button>
      <Button theme='primary'><Link href="/projects">Projects</Link></Button>
    </div>
  )
}

export default Menu
