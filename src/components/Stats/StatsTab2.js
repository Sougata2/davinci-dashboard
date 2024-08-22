function StatsTab2({ title, data, attribute }) {
  return (
    <div className="stats-data tab-2">
      <div className="stats-data-title-1">{title}</div>
      <div >
        <img src="" alt="" className="" />
      </div>
      <div className="stats-data-stat-1">
        {data.toLocaleString()}{" "}
        <span className="stats-data-attribute-1">{attribute}</span>
      </div>
    </div>
  );
}

export default StatsTab2;
