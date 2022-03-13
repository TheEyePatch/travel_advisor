import React, { useState, useEffect } from 'react'
import styles from './List.module.css'

function List(){
  
  const [places, setPlaces] = useState([])

  useEffect(() => {
    let data = [
      {
        name: 'Baguio Restaurant One',
        timezone: 'PH TimeZone'
      },
      {
        name: 'Baguio Restaurant Two',
        timezone: 'PH TimeZone'
      },
      {
        name: 'Baguio Restaurant Three',
        timezone: 'PH TimeZone'
      }
    ]

    setPlaces(data)
  }, [])

  return (
    <div className={styles.container}>
      <h3>Restaurants, Hotels & Attractions around you</h3>
      {
        places?.map(place => {
          return (
            <li key={place.name}>
              <h1>{place.name}</h1>
              <p>{place.timezone}</p>
            </li>
          )
        })
      }
    </div> 
  )
}

export default List