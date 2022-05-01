import React, { useState, useEffect } from 'react'
import styles from './List.module.css'
import LocationDetails from '../LocationDetails/LocationDetails'
import { Card, Row, Col, Select } from'antd'

const { Option } = Select;

function List({ className, places, place_type, setType}){

  const types = ['hotels', 'restaurants', 'attractions']
  
  const changeTypeHandler = (value) => {
    setType(value)
  }

  return (
    <div className={styles.list_section}>
      <h3 className={styles.container_header}>Restaurants, Hotels & Attractions around you</h3>
      <div className={styles.list_type_select}>
        <Select defaultValue="hotels" style={{ width: 300 }} onChange={changeTypeHandler}>
        {
          types?.map(type => {
            return <Option value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</Option>
          })
        }
        </Select>
      </div>
      <div className={"site-card-border-less-wrapper " + styles.list_container}>
        <Row gutter={[0, 16]}>
        {
          places?.filter(place => place.name).map(place => {
            return (
              <Col span={20}>
                <Card
                  title="Card title"
                  bordered={true}
                  style={{ width: '80%' }}
                  hoverable={true}
                >
                  <li key={place.location_id}>
                    <img src={place.photo?.images.medium.url} alt="" className={styles.photo}/>
                    <h1>{place.name}</h1>
                    <p>{place.timezone}</p>
                  </li>
                </Card>
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