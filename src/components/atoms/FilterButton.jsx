import "../../styles/FilterButton.css";

const FilterButton = ({ text, filter, filterFn }) => {
  const currentlyFiltered = text === filter;

  function applyFilter() {
    filterFn(text);
  }

  function resetFilter() {
    filterFn("");
  }

  return (
    <button
      onClick={() => {
        currentlyFiltered ? resetFilter() : applyFilter();
      }}
    >
      {text}
    </button>
  );
};

export default FilterButton;
