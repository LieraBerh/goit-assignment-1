import Select from "react-dropdown-select";
import carsModels from "../../data/carsModels";

const Dropdown = ({ onMakeChange }) => {
  const options = carsModels.map((model) => ({
    label: model,
    value: model,
  }));

  return (
    <Select
      options={options}
      labelField="label"
      valueField="value"
      onChange={(values) => onMakeChange(values[0]?.value || "")}
    />
  );
};
export default Dropdown;
