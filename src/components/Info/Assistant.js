import { MdOutlineStar } from "react-icons/md";

function Assistant({ assistant }) {
  const fullName = assistant.name.first + " " + assistant.name.last;
  const image = assistant.picture.thumbnail;
  return (
    <div className="assistant">
      <div className="assistant-image">
        <img src={image} alt={fullName} />
      </div>
      <div className="assistant-info">
        <div className="assistant-name">{fullName}</div>
        <div className="assistant-type">Type</div>
      </div>
      <div className="assistant-rating">
        <MdOutlineStar />
      </div>
    </div>
  );
}

export default Assistant;
