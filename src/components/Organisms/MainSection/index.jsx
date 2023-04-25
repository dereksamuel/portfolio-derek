import React from 'react'
import AboutSection from '@molecules/AboutSection'
import styles from './_.module.scss'
import Derek from '@/components/Atoms/Derek'

function MainSection () {
  return (
    <div className={`${styles['main-section']} p-5`}>
      <Derek />
      <AboutSection />
    </div>
  )
}

export default MainSection
