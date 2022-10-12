import "./styles/App.css";
import useFetch from "react-fetch-hook";
import { api } from "./constans/api-endpoints.constants";
import FilteredList from "./components/FilteredList";

function App() {
  const { isLoading, data, error } = useFetch(api.person);

  const hits = data?.personlista[Object.keys(data?.personlista)[1]];
  const date = data?.personlista[Object.keys(data?.personlista)[0]];
  const persons = data?.personlista?.person;

  // need a check for clipboard api, 94% of browsers support it
  // also need a good visual feedback that text has successfully been copied
  // const copyToClipboard = (text: string) => navigator.clipboard?.writeText && navigator.clipboard.writeText(text)

  //    <button type="button" onClick={() => copyToClipboard("Hello world")}>
  //        Press here to copy text
  //    </button> */}

  return (
    <div className="App">
      {isLoading && (
        <div>
          <h1>Fetching your data ...</h1>
          <div className="dual-ring-loader"></div>
        </div>
      )}
      {!!error && <h1>Something went wrong during datafetch</h1>}
      {!error && !isLoading && (
        <FilteredList hits={hits} date={date} persons={persons} />
      )}
    </div>
  );
}

export default App;
