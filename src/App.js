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

  const getHotels = async () => {
    const data = await getPlacesData()
    console.log(data)
    setPlaces(data)
  }

  useEffect(() => {
    // getHotels()
    console.log(coordinates)
    console.log(bounds)
  }, [bounds, coordinates])

  return (
    <div className={styles.main}>
      <Header/>
      <div className={styles.data_section}>
        <List className={styles.list_section}/>
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
