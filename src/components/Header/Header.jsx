import React, {useState, useMemo, useRef} from 'react';
import  styles from './Header.module.css'
import { Input} from 'antd';
import { getGeoCodeData } from './../../api/index'
import SearchItems from './SearchItems'
// import debounce from 'lodash/debounce';
const { Search } = Input;

function Header({setCoordinates}){
  const [geo_places, setGeoPlaces] = useState([]);

  const onSearch = (value)=> {
    let params = new URLSearchParams({ q: value })
    getGeoCodeData(params).then((value) =>{
      console.log(value)
      setGeoPlaces(value.data)
    })
  }

  const searchPlace = (e) => {
    let filteredPlaces = geo_places.filter(place => place.place_id == e.target.value)
    console.log(filteredPlaces[0])
    setGeoPlaces([])
    setCoordinates({lat: Number(filteredPlaces[0].lat), lng: Number(filteredPlaces[0].lon)})
  }

  let searchResults = null;
  if(geo_places.length > 0){
    searchResults = <SearchItems places={geo_places} className={styles['search-items']} searchPlace={searchPlace}/>
  }
  const searchStyle = {
    width: 300,
    color: "#FAEBD7",
    backgroundColor: "#00FFFF",
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
          {searchResults}
      </div>
    </div>
  )
}


export default Header