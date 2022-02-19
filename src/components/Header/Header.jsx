import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import  styles from './Header.module.css'

function Header(){
  return (
    <div className={styles.header}>
      <h4 className={styles.title}>Travel Advisor</h4>

      <div className={styles.search_box}>
        <h6 className={styles.title}>Explore New Places</h6>
        <div className={styles.search}>
          <input type="search" placeholder='Search...' />
        </div>
      </div>
    </div>
  )
}


export default Header