import React, { useState, useEffect } from 'react'
import styles from './List.module.css'

function List(){
  
  const [places, setPlaces] = useState([])
  const [place_type, setType] = useState('hotel')
  const types = ['hotel', 'restaurants', 'attractions']

  const changeTypeHandler = (e) => {
    let type = e.target.value
    console.log(type)
    setType(type)
  }

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

    console.log(place_type)
    setPlaces(data)
  }, [])

  return (
    <div className={styles.container}>
      <h3>Restaurants, Hotels & Attractions around you</h3>
      <select value={place_type} onChange={changeTypeHandler}>
        {
          types?.map(type => {
            return <option value={type} key={type}>{type}</option>
          })
        }
      </select>

      <h1>{place_type}</h1>

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