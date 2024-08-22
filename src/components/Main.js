import Graph from "./Graph/Graph";
import Info from "./Info/Info";
import Stats from "./Stats/Stats";

export default function Main() {
  return (
    <div className="main">
      <Stats />
      <Info />
      <Graph />
    </div>
  );
}
