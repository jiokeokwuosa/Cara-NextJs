import type { NextPage } from 'next'
import { useState, MouseEvent } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/layouts/navigation'
import Header from '../components/layouts/header'
import ProductBox from '../components/productBox'

export const getStaticProps = async () => {
  const res = await fetch('https://62153783cdb9d09717b21f66.mockapi.io/api/v1/catalogue')
  const data = await res.json()

  return {
    props: {
      products: data
    }
  }
}

type Props = {
  products: Array<object>
}

const Home: NextPage<Props> = ({ products }) => {
  const [returnedProducts, setReturnedProducts] = useState<Array<any>>(products)

  const handleShortListing = (productId: string, status: string, e: MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault()
    if (status === 'shortlist') {
      returnedProducts[+productId - 1]['shortlisted'] = true;
    } else {
      returnedProducts[+productId - 1]['shortlisted'] = false;
    }
    setReturnedProducts([...returnedProducts])
  }

  const displayProducts = () => {
    if (returnedProducts && returnedProducts.length) {
      return returnedProducts.map((product: any) => {
        return <ProductBox product={product} key={product.id} handleShortListing={handleShortListing} />
      })
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Carra App</title>
        <meta name="description" content="Carra App" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <NavBar data={returnedProducts} handleShortListing={handleShortListing}/>
      <Header />
      <main className={`container ${styles.homeContainer}`}>
        <div className='row'>
          {displayProducts()}
        </div>
      </main>
    </div>
  )
}

export default Home
