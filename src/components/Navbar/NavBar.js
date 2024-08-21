import Bell from "./Bell";
import Flag from "./Flag";
import NightMode from "./NightMode";
import Options from "./Options";
import User from "./User";

export default function Header() {
  return (
    <div className="nav-bar bg-white rounded-border">
      <div className="nav-bar-right">Welcome, John Doe👋</div>
      <div className="nav-bar-left">
        <Options />
        <NightMode />
        <Bell />
        <Flag />
        <User />
      </div>
    </div>
  );
}
