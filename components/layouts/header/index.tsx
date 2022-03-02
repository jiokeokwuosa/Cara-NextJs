import { FC } from 'react'
import styles from './header.module.css'

const Header: FC = () => {
  return (  
    <header className={styles.headerBox}>      
      <h2>Product Catalogue 2022</h2>
    </header>   
  )
}

export default Header