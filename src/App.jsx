import "./App.css";
import useFetch from "react-fetch-hook";
import { api } from "./constans/api-endpoints.constants";
import FilteredList from "./components/FilteredList";

function App() {
  const { isLoading, data, error } = useFetch(api.person);

  const hits = data?.personlista[Object.keys(data?.personlista)[1]];
  const date = data?.personlista[Object.keys(data?.personlista)[0]];
  const persons = data?.personlista?.person;
  console.log("err", error);

  return (
    <>
      {isLoading && <h1>Rendering fetched personlist</h1>}
      {!!error && <h1>Something went wrong during datafetch</h1>}
      {!isLoading && <FilteredList hits={hits} date={date} persons={persons} />}
    </>
  );
}

export default App;
