import { EnvironmentFilled } from '@ant-design/icons';
import { Card, Rate } from 'antd'
import styles from './MapCard.module.css'


function MapCard({key, place, lat, lng}){
  return (
    <div
      className={styles.mapCardContainer}
      lat={lat}
      lng={lng}
      key={key}
    >
      <Card
        className={styles.card}
        size="small"
        style={{width: '100%'}}
        cover={<img src={place.photo?.images.medium.url} alt="" className={styles.photo}/>}
        title={place.name}
        hoverable={true}
      >
        <p>Price: {place.price}</p>
        <Rate disabled allowHalf defaultValue={place.num_reviews} style={{fontSize: '12px'}} />
      </Card>
    </div>
  )
}

export default MapCard