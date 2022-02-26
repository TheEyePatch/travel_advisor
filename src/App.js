import React from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'
import styles from './App.module.css'

function App(){
  return (
    <div className={styles.main}>
      <Header/>
      <div className={styles.data_section}>
        <List className={styles.list_section}/>
        <Map className={styles.google_map_section}/>
      </div>
      
    </div>
  )
}

export default App;
