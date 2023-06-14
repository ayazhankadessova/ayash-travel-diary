function Card(props) {
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
      <div className='card--image--col'>
        <img src={imageUrl} alt='card--img' className='card--img' />
      </div>
      <div className='card--info--col'>
        <div className='up-section'>
          <i className='bi bi-star-fill'></i>

          {location && (
            <p className='card--info--location'>
              {location.split(',')[1].trim().toUpperCase()}
            </p>
          )}
          <a className='card--location-url' href={`${googleMapsUrl}`}>
            View Google Maps
          </a>
        </div>
        {title && <h2 className='card--info--title'>{title}</h2>}
        {startDate && endDate && (
          <p className='card--info--date'>
            {startDate} - {endDate}
          </p>
        )}
        {description && <p className='card--info--desc'>{description}</p>}
      </div>
    </div>
  )
}

export default Card
