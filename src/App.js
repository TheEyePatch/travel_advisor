import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'
import styles from './Main.module.css'
import './App.less'

import { getPlacesData } from './api/index'
import { Row, Col } from 'antd';

function App(){

  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({lat: 14.630473624869978, lng: 481.02126039567804})
  const [bounds, setBounds] = useState({})

  const [place_type, setType] = useState('hotels')

  const getHotels = async (bounds, place_type) => {
    console.log(bounds)
    const data = await getPlacesData(bounds.sw, bounds.ne, place_type)
    setPlaces(data.data)
  }

  useEffect(() => {
    console.log(place_type)
    console.log(bounds)
    if(Object.keys(bounds).length > 0) getHotels(bounds, place_type)
  }, [bounds, place_type])

  return (
    <div className={styles.main}>
      <Header/>
      <div className={styles.data_section}>
        <Row>
          <Col xs={{span: 24, order:1 }} md={{span: 10, order:0}} lg={8}>
            <List
            className={styles.list_section}
            places={places}
            place_type={place_type}
            setType={setType}
            />
          </Col>
          <Col xs={{span: 24, order: 0 }} md={{span: 14, order:1}} lg={16}>
            <Map 
              className={styles.google_map_section}
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
            />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default App;
