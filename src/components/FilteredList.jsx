import Card from "./atoms/Card";
import FilterButton from "./atoms/FilterButton";
import { swedishParties } from "../constans/swedish-parties.constants";
import { useState } from "react";

export default function FilteredList({ date, hits, persons }) {
  const [filter, setFilter] = useState("");
  const filteredPersons = filter
    ? persons.filter((persons) => persons.parti === filter)
    : persons;

  const filterButtonList = swedishParties.map((partyName) => (
    <FilterButton
      key={partyName}
      text={partyName}
      filter={filter}
      filterFn={setFilter}
    />
  ));

  // I'd use unsorted list as default option
  const cardList = filteredPersons.map((element) => (
    <Card
      key={element.intressent_id}
      name={element.sorteringsnamn}
      politicalParty={element.parti}
    />
  ));

  const sortedCardList = filteredPersons
    .sort((a, b) => a.parti.localeCompare(b.parti))
    .map((element) => (
      <Card
        key={element.intressent_id}
        name={element.sorteringsnamn}
        politicalParty={element.parti}
      />
    ));

  return (
    <div>
      <h1>Grabbed {hits} people</h1>
      <h2>Latest fetch {date}</h2>
      <div>{filterButtonList}</div>
      <div>{sortedCardList}</div>
    </div>
  );
}
