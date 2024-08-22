function StatsTab1({ title, data, attribute }) {
  return (
    <div className="stats-data">
      <div className="stats-data-title-1">{title}</div>
      <div className="stats-data-stat-1">
        {data.toLocaleString()}{" "}
        <span className="stats-data-attribute-1">{attribute}</span>
      </div>
    </div>
  );
}

export default StatsTab1;
