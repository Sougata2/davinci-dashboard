import StatsTab1 from "./StatsTab1";
import StatsTab2 from "./StatsTab2";

function Stats() {
  return (
    <div className="stats">
      <div className="stats-title">Major Stats</div>
      <div className="stats-description">This is what we have got for you today.</div>
      <div className="stats-row-2">
        <StatsTab1 title={"Words Left"} data={5496893} />
        <StatsTab1 title={"Images Left"} data={5508229} />
      </div>
      <div className="stats-row-3">
        <StatsTab1 title={"Characters Left"} data={949638552} />
        <StatsTab1 title={"Minutest Left"} data={189871} />
        <StatsTab1
          title={"Documents Created"}
          data={2266}
          attribute={"contents"}
        />
      </div>
      <div className="stats-row-5">
        <StatsTab2
          title={"Wrods generated"}
          data={425930}
          attribute={"words"}
        />
        <StatsTab2 title={"Images created"} data={0} attribute={"Images"} />
        <StatsTab2 title={"Codes generated"} data={256} attribute={"Codes"} />
        <StatsTab2 title={"voiceOver Tasks"} data={455} attribute={"words"} />
        <StatsTab2
          title={"Audio Transcribed"}
          data={2}
          attribute={"audio files"}
        />
      </div>
    </div>
  );
}

export default Stats;
