function Card({ title, desc, children }) {
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-description">{desc}</div>
      <div className="container-scroll">
        <div className="card-content">{children}</div>
      </div>
      <div className="wrapper"></div>
    </div>
  );
}

export default Card;
