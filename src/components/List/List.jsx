import React, { useState, useEffect } from 'react'
import styles from './List.module.css'
import LocationDetails from '../LocationDetails/LocationDetails'

function List({places, place_type, setType}){

  const types = ['hotels', 'restaurants', 'attractions']
  
  const changeTypeHandler = (e) => {
    let type = e.target.value
    setType(type)
  }

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
            <li key={place.location_id} className={styles.list_item}>
              <img src={place.photo?.images.medium.url} alt="" className={styles.photo}/>
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