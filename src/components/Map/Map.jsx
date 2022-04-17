import React from "react";
import GoogleMapReact from 'google-map-react';
import styles from './Map.module.css'

function Map({className, setCoordinates, setBounds, coordinates}){
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
          key: 'AIzaSyB8hZaiUpwPEFMFMpe9bZhVM4d7cdiiIBk',
          language: 'en' 
        }}
        defaultCenter={{lat: 14.630473624869978, lng: 481.02126039567804}}
        center={coordinates}
        defaultZoom={13}
        onChange={handleChange}
      >

      </GoogleMapReact>
    </div>
  )
}

export default Map