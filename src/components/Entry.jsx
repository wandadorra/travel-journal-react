export default function Entry(props) {
  return (
    <article className="article-container">
      <div className="article">
        <div className="main-img-container">
          <img className="main-img" src={props.img.src} alt={props.img.alt} />
        </div>

        <div className="info-container">
          <div className="map-info-container">
            <img
              className="location-icon"
              src="src/assets/location-dot-solid.svg"
              alt="location pin icon"
            />
            <p className="country-name">{props.country}</p>
            <a className="maps-link" href={props.googleMapsLink}>
              View on Google Maps
            </a>
          </div>

          <h2 className="location-name">{props.title}</h2>
          <p className="trip-dates">{props.dates}</p>
          <p className="trip-description">{props.text}</p>
        </div>
      </div>
    </article>
  );
}
