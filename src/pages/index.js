import React from 'react'
import Button from '@/components/Atoms/Button'

export default function Home () {
  return (
    <>
      <h1><strong>[Subject]: Derek Paul</strong></h1>
      <Button theme='primary'>Derek Samuel Paul Pena</Button>
      <Button theme='primary'>Portfolio</Button>
      <Button theme='light'>About me</Button>
      <Button theme='secondary'>Disabled</Button>
      <Button theme='danger'>Danger</Button>
      <Button theme='success'>Danger</Button>
      <Button theme='warning'>Danger</Button>
    </>
  )
}
