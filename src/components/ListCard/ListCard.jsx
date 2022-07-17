import React, { useState } from 'react';
import styles from './ListCard.module.css';
import { Card, Rate, Modal } from 'antd';
import { InfoCircleFilled } from '@ant-design/icons';
import ListCardModal from "./../ListCardModal/ListCardModal";

const { Meta } = Card;

function ListCard({place, index}){
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleClick = () => {
    setIsModalVisible(true)
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
          place.web_url ? (
            <div onClick={handleClick}>
              <InfoCircleFilled style={{ marginTop: '12px', fontSize: '20px', color: '#00BFFF' }}/>
            </div>
          ) : <InfoCircleFilled style={{ marginTop: '12px', fontSize: '20px', color: '#00BFFF' }} value={place} onClick={handleClick}/>
        }
        
        {/* Note that can still add elements */}
      </Card>

      <ListCardModal setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible} place={place}/>
    </>
  )
}

export default ListCard;