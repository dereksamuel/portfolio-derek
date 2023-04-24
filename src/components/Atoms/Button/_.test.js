/* eslint-disable no-undef */
import React from 'react'
import '@testing-library/jest-dom'
import Button from '.'
import { render } from '@testing-library/react'

describe('Button', () => {
  it('should be rendered', () => {
    const button = render(<Button />)
    expect(button.getByTestId('button')).toBeInTheDocument()
  })

  it('should render child error', () => {
    const button = render(<Button />)
    expect(button.getByText('No hay contenido en el botón')).toBeTruthy()
  })
})
