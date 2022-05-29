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
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState({})
  const [rating, setRating] = useState(0)

  const [place_type, setType] = useState('hotels')
  const [filtered_places, setFilterdPlaces] = useState([])

  const getHotels = async (bounds, place_type) => {
    const data = await getPlacesData(bounds.sw, bounds.ne, place_type)
    setPlaces(data.data)
  }

  const filterPlaces = (rate) => { 
    setRating(rate)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition( ({coords}) => {
      setCoordinates({lat: coords.latitude, lng: coords.longitude}) 
    }, error => {
      console.log(error)
    });
    }, [])

  useEffect(() => {
    setFilterdPlaces(places.filter(place => place.rating >= rating))
    console.log(rating)
  },[places, rating])

  useEffect(() => {
    if(bounds.sw && bounds.ne) getHotels(bounds, place_type)
  }, [bounds, place_type])

  return (
    <div className={styles.main}>
      <Header setCoordinates={setCoordinates}/>
      <div className={styles.data_section}>
        <Row>
          <Col xs={{span: 24, order:1 }} md={{span: 10, order:0}} lg={8}>
            <List
            className={styles.list_section}
            places={filtered_places}
            place_type={place_type}
            setType={setType}
            filterPlaces={filterPlaces}
            />
          </Col>
          <Col xs={{span: 24, order: 0 }} md={{span: 14, order:1}} lg={16}>
            <Map 
              className={styles.google_map_section}
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
              places={filtered_places}
            />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default App;
