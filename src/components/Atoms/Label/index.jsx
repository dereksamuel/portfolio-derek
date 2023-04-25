import React from 'react'
import styles from './_.module.scss'

function Label () {
  return (
    <article className={`${styles.label} p-5`} data-testid='label'>
      <h1 className='text-4xl'><strong>[Subject]: Derek Paul</strong></h1>
      <p className='text-xl font-medium'>Power: Front-end Developer</p>
    </article>
  )
}

export default Label
