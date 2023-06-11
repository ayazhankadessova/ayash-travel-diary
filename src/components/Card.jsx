function Card(props) {
  //   let badgeText
  //   if (openSpots === 'done') {
  //     badgeText = 'done'
  //   } else if (place === 'planning') {
  //     badgeText = 'planning'
  //   }

  const {
    imageUrl,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    title,
  } = props.travel

  return (
    <div className='card'>
      {/* {badgeText && <div className='card--badge'>{badgeText}</div>} */}
      <img src={imageUrl} alt='card--img' className='card--image' />
      <div className='card--info'>
        <a href={`${googleMapsUrl}`}>View Google Maps</a>{' '}
        <i className='bi bi-star-fill'></i>
        {location && <h3 className='card--info1'>{location}</h3>}
        {title && <h2 className='card--info1'>{title}</h2>}
        {startDate && endDate && (
          <p className='card--info1'>
            {startDate} - {endDate}
          </p>
        )}
        {description && <p className='card--info1'>{description}</p>}
      </div>
    </div>
  )
}

export default Card
