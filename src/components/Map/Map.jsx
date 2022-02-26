import React from "react";
import GoogleMapReact from 'google-map-react';
import styles from './Map.module.css'

function Map(props){

  const coordinates= {lat:0, lng: 0}

  return (
    <div className={`${props.className} ${styles.map}`}>
      <GoogleMapReact
        bootstrapURLKeys={{ 
          key: 'AIzaSyB8hZaiUpwPEFMFMpe9bZhVM4d7cdiiIBk',
          language: 'en' 
        }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
      >

      </GoogleMapReact>
    </div>
  )
}

export default Map