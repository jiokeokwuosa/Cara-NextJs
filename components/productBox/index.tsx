import { FC, MouseEvent } from 'react'
import Image from 'next/image';
import styles from './productBox.module.css'
import FavouriteF from '../../public/img/outline_favorite_black_24dp.png';
import FavouriteO from '../../public/img/outline_favorite_border_black_24dp.png';

type Props = {
  product: {
    name: string,
    price: string,
    image: string,
    discontinued: boolean,
    id:string,
    shortlisted?:boolean
  },
  handleShortListing:(productId:string,status:string,e:MouseEvent<HTMLAnchorElement>)=>void;
}

const ProductBox: FC<Props> = ({ product, handleShortListing }) => {
  return (
    <div className={`col-md-3 col-6 relative ${styles.productBM}`}>
      <Image src={product.image} width={250} height={300} className={`centerImage ${product.discontinued?styles.greyOut:''}`}/>
      {!product.discontinued ?
        <span className={styles.heartIcon}>
          <a href="/" onClick={handleShortListing.bind(this,product.id,`${!product.shortlisted?'shortlist':'remove'}`)}>
            <Image src={product.shortlisted? FavouriteF:FavouriteO} width={25} height={25} className='centerImage' />
          </a>
        </span>
        : ''}
      <p className={styles.productName}>{product.name}</p>
      <p className={styles.productPrice}>${product.price}</p>
    </div>
  )
}

export default ProductBox