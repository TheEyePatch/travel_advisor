import { EnvironmentFilled } from '@ant-design/icons';
import { Card } from 'antd'
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
        size="small"
        style={{width: '100%'}}
        cover={<img src={place.photo?.images.medium.url} alt="" className={styles.photo}/>}
        title={place.name}
        hoverable={true}
      >
        <p>Price: {place.price}</p>
        <p>Ratings {place.rating}</p>
      </Card>
    </div>
  )
}

export default MapCard