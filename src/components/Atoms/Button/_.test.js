/* eslint-disable no-undef */
import '@testing-library/jest-dom'
import Button from '.'

describe('Button', () => {
  it('should be rendered', () => {
    expect(Button).toBeInTheDocument()
  })
})
