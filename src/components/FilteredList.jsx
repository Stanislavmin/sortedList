import Card from "./atoms/Card";

export default function FilteredList({ date, hits, persons }) {
  console.log(persons);

  const cardList = persons.map((element) => (
    <Card
      key={element.intressent_id}
      name={element.sorteringsnamn}
      politicalParty={element.parti}
    />
  ));
  //console.log(element.sorteringsnamn.filter((word) => (word = "S")));

  return (
    <div>
      <p>Grabbed {hits} people</p>
      <p>Latest fetch {date}</p>
      {/* <div>{cardList.filter()}</div> */}
      <div>{cardList}</div>
    </div>
  );
}
