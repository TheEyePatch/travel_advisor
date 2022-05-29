import React from 'react';
import  styles from './Header.module.css'
import { Input } from 'antd';
import { getGeoCodeData } from './../../api/index'
const { Search } = Input;

function Header(){
  const onSearch = (value)=> {
    let params = new URLSearchParams({ q: value })
    getGeoCodeData(params).then((value) => console.log(value))
  }
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

        {/* can use this api => "https://geocode.maps.co/" for geocoding*/}
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