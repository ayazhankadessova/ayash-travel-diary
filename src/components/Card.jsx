function Card(props) {
  let badgeText
  if (props.travel.openSpots === 'done') {
    badgeText = 'done'
  } else if (props.travel.place === 'planning') {
    badgeText = 'planning'
  }
  return (
    <div className='card'>
      {badgeText && <div className='card--badge'>{badgeText}</div>}
      <img
        src={props.travel.imageUrl}
        alt='card--img'
        className='card--image'
      />
      <div className='card--info'>
        <i className='bi bi-star-fill'></i>
        {props.travel.location && (
          <h3 className='card--info1'>{props.travel.location}</h3>
        )}
        {props.travel.title && (
          <h2 className='card--info1'>{props.travel.title}</h2>
        )}
        {props.travel.startDate && props.travel.endDate && (
          <p className='card--info1'>
            {props.travel.startDate} - {props.travel.endDate}
          </p>
        )}
        {props.travel.description && (
          <p className='card--info1'>{props.travel.description}</p>
        )}
      </div>
    </div>
  )
}

export default Card
