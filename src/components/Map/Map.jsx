import React from "react";
import GoogleMapReact from 'google-map-react';
import styles from './Map.module.css'
import MapCard from "../MapCard/MapCard";

function Map({className, setCoordinates, setBounds, coordinates, places}){
  const handleChange = (e) => {
    // For Coordinates
    setCoordinates(e.center)

    // For Boundaries
    setBounds(e.bounds)
  }

  return (
    <div className={`${className} ${styles.map}`}>
      <GoogleMapReact
        bootstrapURLKeys={{ 
          key: process.env.REACT_APP_GOOGLE_MAP_SECRET_KEY,
          language: 'en' 
        }}
        center={coordinates}
        defaultZoom={16}
        onChange={handleChange}
      >
        {
          places?.map((place, index) => {
            return (place.rating) && ( 
            <MapCard key={index} place={place} lat={place.latitude} lng={place.longitude} />
            )
          })
        }
      </GoogleMapReact>
    </div>
  )
}

export default Map