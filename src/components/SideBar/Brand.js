import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";

function Brand() {
  return (
    <div className="brand-space flex-box">
      <div className="brand-name">DAVINCI</div>
      <div className="toggle-sidebar">
        <TbLayoutSidebarLeftCollapse />
      </div>
    </div>
  );
}

export default Brand;
