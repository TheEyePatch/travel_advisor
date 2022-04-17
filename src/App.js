import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'
import styles from './App.module.css'

import { getPlacesData } from './api/index'

function App(){
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({lat: 14.630473624869978, lng: 481.02126039567804})
  const [bounds, setBounds] = useState(null)

  const [place_type, setType] = useState('hotel')

  const getHotels = async (bounds, place_type) => {
    const data = await getPlacesData(bounds.sw, bounds.ne, place_type)
    console.log(data.data)
    setPlaces(data.data)
  }

  useEffect(() => {
    console.log(place_type)
    console.log(bounds)
    getHotels(bounds, place_type)
  }, [bounds, place_type])

  return (
    <div className={styles.main}>
      <Header/>
      <div className={styles.data_section}>
        <List
        className={styles.list_section}
        places={places}
        place_type={place_type}
        setType={setType}
        />
        <Map 
          className={styles.google_map_section}
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
        />
      </div>
      
    </div>
  )
}

export default App;
