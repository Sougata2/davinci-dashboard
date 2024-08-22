function StatsTab1({ title, image, data, attribute }) {
  return (
    <div className="stats-data">
      <div className="stats-image-title">
        <div className="stats-image">
          <img src={image} alt={title} />
        </div>
        <div className="stats-data-title-1">{title}</div>
      </div>
      <div className="stats-data-stat-1">
        {data.toLocaleString()}&nbsp;
        <span className="stats-data-attribute-1">{attribute}</span>
      </div>
    </div>
  );
}

export default StatsTab1;
