import { render } from '@testing-library/react'
import Product from '../components/productBox'

let getByTestId;

const dummyData = {
  "createdAt": "2022-02-25T20:26:50.013Z",
  "name": "Handcrafted Soft Tuna",
  "image": "http://placeimg.com/640/480/transport",
  "price": "282.00",
  "offers": [],
  "discontinued": false,
  "id": "1"
}

beforeEach(() => {
  const component = render(<Product product={dummyData} handleShortListing={() => { }} />)
  getByTestId = component.getByTestId
})

describe('Product Tests', () => {
  test("Product component should be in the document", () => {
    const element = getByTestId('product')
    expect(element).toBeInTheDocument()
  })
  test("Product Component displays correct product name", ()=>{  
    const element = getByTestId('productName')
    expect(element.textContent).toContain("Handcrafted Soft Tuna")
  })
  test("Product Component displays correct product price", ()=>{  
    const element = getByTestId('productPrice')
    expect(element.textContent).toBe("$282.00")
  })
})