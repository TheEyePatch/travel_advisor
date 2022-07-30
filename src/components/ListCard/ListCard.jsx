import React, { useState } from 'react';
import styles from './ListCard.module.css';
import { Card, Rate, Modal } from 'antd';
import { InfoCircleFilled } from '@ant-design/icons';

const { Meta } = Card;

function ListCard({place, index}){

  const handleInfoClicked = () => {
    Modal.error({
      title: 'Web Page Unavailable',
      content: `There are no present web page for ${place.name}`,
    });
  }
  return (
    <>
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
          place.web_url ? <a href={place.web_url}><InfoCircleFilled style={{ marginTop: '12px', fontSize: '20px', color: '#00BFFF' }}/></a>
          : <InfoCircleFilled style={{ marginTop: '12px', fontSize: '20px', color: '#00BFFF' }} onClick={handleInfoClicked}/>
        }
        {/* Note that can still add elements */}
      </Card>
    </>
  )
}

export default ListCard;