import React, { useState, useEffect } from 'react'
import styles from './List.module.css'
import LocationDetails from '../LocationDetails/LocationDetails'
import { Card, Row, Col, Select } from'antd'
import { InfoCircleFilled } from '@ant-design/icons';
const { Option } = Select;
const { Meta } = Card;

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
            return <Option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</Option>
          })
        }
        </Select>
      </div>
      <div className={"site-card-border-less-wrapper " + styles.list_container}>
        <Row gutter={[0, 16]}>
        {
          places?.filter(place => place.name).map((place,index) => {
            return (
              <Col span={20} offset={2}>
                <Card
                  key={index}
                  bordered={true}
                  style={{ width: '90%' }}
                  hoverable={true}
                  cover={<img src={place.photo?.images.medium.url} alt="" className={styles.photo}/>}
                >
                  <Meta
                    title={place.name}
                    description={place.timezone}
                    key={index}
                  />
                  <Meta description={`Price: ${place.price}`}/>
                  <Meta description={`Rating: ${place.rating}`}/>
                  <Meta description={`Reviews: ${place.num_reviews}`}/>
                  <InfoCircleFilled 
                    style={{ marginTop: '12px', fontSize: '20px', color: '#00BFFF' }}/>
                  {/* Note that can still add elements */}
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