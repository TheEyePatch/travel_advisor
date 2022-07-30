import React from "react";
import { Modal, Button } from 'antd';
import styles from './ListCardModal.module.css';

function ListCardModal({ isModalVisible, setIsModalVisible, place }){

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <Modal info title={place.name} visible={isModalVisible} footer={null} onCancel={handleCancel}>
      {
        place.photo?.images ? <img src={place.photo?.images.large} alt=""/> : null
      }

      <div className={styles['ok-btn-container']}>
        <Button onClick={handleCancel}>Ok</Button>
      </div>
    </Modal>
  )
}

export default ListCardModal;