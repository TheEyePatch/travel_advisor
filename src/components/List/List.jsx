import React from 'react'
import styles from './List.module.css'
// import LocationDetails from '../LocationDetails/LocationDetails'
import { Row, Col, Select } from'antd'

import ListCard from './../ListCard/ListCard'
const { Option } = Select;


function List({ className, places, place_type, setType, filterPlaces}){

  const types = ['hotels', 'restaurants', 'attractions']
  const ratings = [4, 3, 2, 0]
  
  const changeTypeHandler = (value) => {
    setType(value)
  }


  return (
    <div className={styles.list_section}>
      <h3 className={styles.container_header}>Restaurants, Hotels & Attractions around you</h3>
      <div className={styles.list_type_select}>
        <Select defaultValue="hotels" style={{ width: 150 }} onChange={changeTypeHandler}>
        {
          types?.map(type => {
            return <Option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</Option>
          })
        }
        </Select>
        <Select defaultValue={0} style={{ width: 150 }} onChange={filterPlaces}>
          {
            ratings.map((rating, index) => <Option key={index} value={rating}>{ rating === 0 ? 'All' : `${rating} and Above`}</Option>)
          }
        </Select>
      </div>
      <div className={"site-card-border-less-wrapper " + styles.list_container}>
        <Row gutter={[0, 16]}>
        {
          places?.filter(place => place.name).map((place,index) => {
            return (
              <Col key={index} span={20} offset={2}>
                <ListCard place={place} index={index}/>
              </Col>
            )
          })
        }
        </Row>
      </div>
    </div>
  )
}

export default List