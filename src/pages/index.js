import React from 'react'
import Button from '@/components/Atoms/Button'
import Cursor from '@/components/Atoms/Cursor'

export default function Home () {
  return (
    <>
      <Cursor />
      <h1><strong>[Subject]: Derek Paul</strong></h1>
      <Button theme='primary'>Portfolio</Button>
    </>
  )
}
