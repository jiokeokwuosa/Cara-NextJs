import { render } from '@testing-library/react'
import Header from '../components/layouts/header'

let getByTestId;

beforeEach(() => {
  const component = render(<Header />)
  getByTestId = component.getByTestId  
})

describe('Header Tests', () => {
    test("header should be in the document", () => {
        const element = getByTestId('header')
        expect(element).toBeInTheDocument()   
    })
    test("header renders with correct text", () => {
      const element = getByTestId('header')
      expect(element.textContent).toBe('Product Catalogue 2022')
    })
})