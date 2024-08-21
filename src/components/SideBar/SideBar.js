import DashBoardBtn from "./DashBoardBtn";
import Brand from "./Brand";
import Panels from "./Panels";

export default function SideBar() {
  return (
    <div className="side-bar bg-white rounded-border box-shadow-8">
      <Brand />
      <DashBoardBtn />
      <Panels />
    </div>
  );
}
