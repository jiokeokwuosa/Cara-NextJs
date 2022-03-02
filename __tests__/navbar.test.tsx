import { render } from '@testing-library/react'
import { randomUUID } from 'crypto';
import Navbar from '../components/layouts/navigation'

let getByTestId;

const dummyData = [{
  "createdAt": "2022-02-25T20:26:50.013Z",
  "name": "Handcrafted Soft Tuna",
  "image": "http://placeimg.com/640/480/transport",
  "price": "282.00",
  "offers": [],
  "discontinued": false,
  "id": 9,
  "shortlisted":true
}]

beforeEach(() => {
  const component = render(<Navbar data={dummyData} handleShortListing={() => { }} />)
  getByTestId = component.getByTestId
})

describe('Navbar Tests', () => {
  test("Navbar component should be in the document", () => {
    const element = getByTestId('navbar')
    expect(element).toBeInTheDocument()
  })
  test("Navbar renders with correct item", ()=>{  
    const element = getByTestId('navbar')
    expect(element.textContent).toContain("Handcrafted Soft Tuna")
  }) 
})