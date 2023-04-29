import React from 'react'
import styles from './_.module.scss'
import Hability from '@/components/Atoms/Hability'
import { IoLogoGithub, IoLogoLinkedin, IoMdCall, IoMdMail } from 'react-icons/io'
import Button from '@/components/Atoms/Button'

function AboutSection () {
  const descs = [
    {
      subtitle: 'A little description about me',
      desc: "Greetings! I'm just a man with the desire to never stop learning, that way of thinking has saved me many times in my work and in my personal life, especially in the role of frontend developer because currently I face problems with no apparent solution."
    },
    {
      subtitle: 'My habilities',
      html: <div className={styles.habilities}>
        <Hability src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png' name='JavaScript' qualify={6} />
        <Hability src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png' name='HTML5' qualify={7} />
        <Hability src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png' name='CSS3' qualify={6} />
        <Hability src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png' name='Git' qualify={5} />
        <Hability src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' name='React' qualify={6} />
        <Hability src='https://vuejs.org/images/logo.png' name='Vue.js' qualify={6} />
        <Hability src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png' name='Svelte' qualify={4} />
      </div>
    },
    {
      subtitle: 'Social media & Contact',
      html: <div className={`${styles['social-media']} flex p-5 text-center`}>
        <a className='text-sm' href='https://github.com/dereksamuel' target="_blank" rel="noreferrer"><IoLogoGithub size={30} /> Github</a>
        <a className='text-sm' href='https://www.linkedin.com/in/derek-samuel-pa%C3%BAl-pe%C3%B1a-55a7771b7/' target='_blank' rel="noreferrer"><IoLogoLinkedin size={30} /> Linkedin</a>
        <span className='text-sm'><IoMdCall size={30} /> +57 315 449 454 7</span>
        <span className='text-sm'><IoMdMail size={30} /> 11dereksamuel@gmail.com</span>
      </div>
    }
  ]
  const generateTemplate = (subtitle, desc, html) => {
    return <>
      <h3 className='text-2xl subtitle pb-2 flex justify-between items-center'>
        <strong>{subtitle}</strong>
        {subtitle === 'My habilities' && <Button isSmall>Download Proof</Button>}
      </h3>
      <hr />
      {desc ? <p className='pt-2 pb-5'>{desc}</p> : null}
      {html || null}
    </>
  }

  return <section className={`${styles['about-section']} p-5`}>
    {descs.map((desc) => (
      generateTemplate(desc.subtitle, desc.desc, desc.html)
    ))}
  </section>
}

export default AboutSection
