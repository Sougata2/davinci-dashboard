import { IoIosArrowForward } from "react-icons/io";

function Panel({ title, panelItems }) {
  const styledTitle = title
    .split("-")
    .map((word) => word.toUpperCase())
    .join(" ");
  return (
    <div className="panel">
      <div className="panel-title">{styledTitle}</div>
      <div className="panel-items rounded-border box-shadow-8">
        {panelItems.map((panelItem) => (
          <div className="panel-item rounded-border" key={panelItem[1]}>
            <div className="panel-item-icon">{panelItem[0]}</div>
            <div className="panel-item-title">{panelItem[1]}</div>
            <div className="panel-item-expandable">
              {panelItem[2] && <IoIosArrowForward />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Panel;
