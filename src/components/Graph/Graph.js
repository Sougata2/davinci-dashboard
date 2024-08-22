import { useState } from "react";
import SimpleBarChart from "./BarGraph";

function Graph() {
  const [date, setDate] = useState("current");
  return (
    <div className="graph rounded-border">
      <div className="graph-head">
        <div className="graph-info">
          <div className="graph-title">
            Word Generation<span className="month">({date})</span>
          </div>
          <div className="graph-desc">
            Monitor your daily word generation closely
          </div>
        </div>
        <div className="graph-control options border-grey">
          <select>
            <option value="06/22/23-06/22/23">06/22/23-06/22/23</option>
          </select>
        </div>
      </div>

      <div className="graph-body">
        <SimpleBarChart />
      </div>
    </div>
  );
}

export default Graph;
