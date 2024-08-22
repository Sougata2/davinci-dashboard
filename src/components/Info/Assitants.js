import { useState } from "react";
import Card from "./Card";
import { useEffect } from "react";
import Assistant from "./Assistant";

function Assitants() {
  const [assistantList, setAssistantList] = useState([]);
  useEffect(function () {
    async function fetchAssistants() {
      const res = await fetch(
        "https://randomuser.me/api/?inc=name,picture&nat=us&results=20"
      );
      const data = await res.json();
      setAssistantList(data.results);
    }
    fetchAssistants();
  }, []);
  return (
    <Card
      title={"Favourite AI Chat Assistants"}
      desc={"Have you favourite chat assistants handy anytime you need them"}
    >
      {assistantList.map((assistant) => (
        <Assistant
          key={assistant.name.first + assistant.name.last}
          assistant={assistant}
        />
      ))}
    </Card>
  );
}

export default Assitants;
