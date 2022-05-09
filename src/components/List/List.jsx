import React, { useState, useEffect } from 'react'
import styles from './List.module.css'
import LocationDetails from '../LocationDetails/LocationDetails'
import { Card, Row, Col, Select, Rate } from'antd'
import { InfoCircleFilled } from '@ant-design/icons';
const { Option } = Select;
const { Meta } = Card;

function List({ className, places, place_type, setType, filterPlaces}){

  const types = ['hotels', 'restaurants', 'attractions']
  const ratings = [4, 3, 2, 0]
  
  const changeTypeHandler = (value) => {
    setType(value)
  }

  const handleClick = () => {
    console.log('No Link')
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
              <Col span={20} offset={2}>
                <Card
                  key={index}
                  bordered={true}
                  style={{ width: '90%' }}
                  hoverable={true}
                  cover={<img src={place.photo?.images.medium.url} alt="" className={styles.photo}/>}
                >
                  <Meta title={place.name} key={index}/>
                  <Meta description={`Location: ${place.location_string ? place.location_string : 'N/A'}`}/>
                  <Meta description={place.timezone}/>
                  <Meta description={`Price: ${place.price ? place.price : 'N/A'}`}/>
                  <Rate disabled allowHalf={true} value={Number(place.rating)} />
                  <br/>
                  {
                    place.web_url ? (
                      <a href={place.website}>
                        <InfoCircleFilled style={{ marginTop: '12px', fontSize: '20px', color: '#00BFFF' }} value={place}/>
                      </a>
                    ) : <InfoCircleFilled style={{ marginTop: '12px', fontSize: '20px', color: '#00BFFF' }} value={place} onClick={handleClick}/>
                  }
                  
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