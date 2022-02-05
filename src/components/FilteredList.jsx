import Card from "./atoms/Card";
import FilterButton from "./atoms/FilterButton";
import { swedishParties } from "../constans/swedish-parties.constants";
import { useState } from "react";

export default function FilteredList({ date, hits, persons }) {
  console.log(persons);

  const [filter, setFilter] = useState("");

  const filteredPersons = filter
    ? persons.filter((persons) => persons.parti === filter)
    : persons;

  console.log("filtered Data", filteredPersons);

  const filterButtonList = swedishParties.map((partyName) => (
    <FilterButton
      key={partyName}
      text={partyName}
      filter={filter}
      filterFn={setFilter}
    />
  ));

  const cardList = filteredPersons.map((element) => (
    <Card
      key={element.intressent_id}
      name={element.sorteringsnamn}
      politicalParty={element.parti}
    />
  ));

  return (
    <div>
      <p>Grabbed {hits} people</p>
      <p>Latest fetch {date}</p>
      {filterButtonList}
      <div>{cardList}</div>
    </div>
  );
}
