const FilterButton = ({ text, filter, filterFn }) => {
  function applyFilter() {
    filterFn(text);
  }

  function resetFilter() {
    filterFn("");
  }

  return (
    <button
      onClick={() => {
        filter ? resetFilter() : applyFilter();
      }}
    >
      {text}
    </button>
  );
};

export default FilterButton;
