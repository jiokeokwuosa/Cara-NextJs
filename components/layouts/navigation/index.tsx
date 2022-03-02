import { FC, MouseEvent } from 'react'
import { Dropdown } from 'react-bootstrap'
import Image from 'next/image';
import styles from './navigation.module.css'
import Favourite from '../../../public/img/outline_favorite_black_24dp.png';

type Props = {
  data: Array<object>,
  handleShortListing:(productId:string,status:string,e:MouseEvent<HTMLAnchorElement>)=>void;
}

const NavBar: FC<Props> = ({ data, handleShortListing }) => {
  const displayProducts = () => {
    if (data && data.length) {
      return data.map((product: any) => {
        if (product.shortlisted) {
          return <><a key={product.id} className={styles.dropDownBox} onClick={handleShortListing.bind(this,product.id,'remove')}>{product.name} &nbsp;&nbsp;&nbsp; <strong>X</strong></a><br/></>         
        }
      })
    }
  }
  return (
    <nav className='container align-right' data-testid="navbar">
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic" className={styles.btnPrimaryOveride}>
          <Image src={Favourite} height={25} width={25} />          
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {displayProducts()}
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  )
}

export default NavBar