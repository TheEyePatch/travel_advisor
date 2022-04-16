import React, { useState, useEffect } from 'react'
import styles from './List.module.css'
import LocationDetails from '../LocationDetails/LocationDetails'

function List(){
  
  const [places, setPlaces] = useState([])
  const [place_type, setType] = useState('hotel')
  const types = ['hotel', 'restaurants', 'attractions']
  const data = [
    { name: 'Baguio Restaurant One', timezone: 'PH TimeZone' },
    { name: 'Baguio Restaurant Two', timezone: 'PH TimeZone' },
    { name: 'Baguio Restaurant Three', timezone: 'PH TimeZone'},
    { name: 'Baguio Restaurant Four', timezone: 'PH TimeZone'},
    { name: 'Baguio Restaurant Five', timezone: 'PH TimeZone'},
    { name: 'Baguio Restaurant Six', timezone: 'PH TimeZone'},
    { name: 'Baguio Restaurant Seven', timezone: 'PH TimeZone'},
    { name: 'Baguio Restaurant Eight', timezone: 'PH TimeZone'},
    { name: 'Baguio Restaurant Nine', timezone: 'PH TimeZone'},
    { name: 'Baguio Restaurant Ten', timezone: 'PH TimeZone'},
    { name: 'Baguio Restaurant Eleven', timezone: 'PH TimeZone'},
    { name: 'Baguio Restaurant Twelve', timezone: 'PH TimeZone'},
    { name: 'Baguio Restaurant Thirteen', timezone: 'PH TimeZone'},
    { name: 'Baguio Restaurant Fourteen', timezone: 'PH TimeZone'},
    { name: 'Baguio Restaurant Eighteen', timezone: 'PH TimeZone'}
  ]

  const changeTypeHandler = (e) => {
    let type = e.target.value
    console.log(type)
    setType(type)
  }

  useEffect(() => {
    setPlaces(data)
    console.log(data)
  }, [])

  return (
    <div className={styles.container}>
      <h3 className={styles.container_header}>Restaurants, Hotels & Attractions around you</h3>
      <select value={place_type} onChange={changeTypeHandler} className={styles.list_type_select}>
        {
          types?.map(type => {
            return <option value={type} key={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
          })
        }
      </select>

      <h1 className={styles.container_title}>{place_type.charAt(0).toUpperCase() + place_type.slice(1)}</h1>
      <ul className={styles.list_container}>
      {
        places?.map(place => {
          return (
            <li key={place.name} className={styles.list_item}>
              <h1>{place.name}</h1>
              <p>{place.timezone}</p>
            </li>
          )
        })
      }
      </ul>
      
    </div> 
  )
}

export default List