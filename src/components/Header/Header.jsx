import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import  styles from './Header.module.css'
import { Input } from 'antd';
const { Search } = Input;

function Header(){
  const onSearch = ()=>{}
  const searchStyle = {
    width: 300,
    color: "#FAEBD7",
    backgroundColor: "#00FFFF"
  }
  return (
    <div className={styles.header}>
      <h4 className={styles.title}>Travel Advisor</h4>

      <div className={styles.search_box}>
        <h6 className={styles.title}>Explore New Places</h6>
        <Search
          className='search_bar'
          placeholder="input search text" 
          onSearch={onSearch}
          style={searchStyle}
          size='large'
          />
      </div>
    </div>
  )
}


export default Header